const express = require('express');
const parser = require('body-parser');
const path = require('path');
const {router} = require('./routes.js');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

require('../Gruntfile.js');
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));


// DB
// require('../db');

// Static
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routers
app.use('/api', router);


// Start up server
app.listen(PORT, (err) => {
  if(err) console.log('Err connecting to server: ', err);
  else console.log('Successfully connected to server on port: ', PORT);
})