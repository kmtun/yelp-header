module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-aws");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({

        aws: grunt.file.readJSON("aws/aws-keys.json"),

        s3: {
            options: {
                accessKeyId: "<%= aws.accessKeyId %>",
                secretAccessKey: "<%= aws.secretAccessKey %>",
                region: "us-west-1",
                bucket: "photo-header"
            },
            build: {
                cwd: "client/dist",
                src: "bundle.js",
                dest: "Bundle/"
            }
        },
        watch: {
          scripts: {
            files: ["client/dist/bundle.js"],
            tasks: ["s3"], 
            options: {
              spawn: false
            },
          }
        }
    });
    grunt.registerTask("default", ["s3", "watch"]);
};