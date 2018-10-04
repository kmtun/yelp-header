# Mock Yelp business Header
Display title, photos, and general information for a business

# To build components container
docker build -t (container name) .

# To build database container
cd db/docker-configs
docker build -t (name to give container) .
To run psql command, in bash shell - psql -U postgres 

Helpful docker commands - 
Remove all stopped containers - docker rm $(docker ps -a -q)
Get into running docker bash - docker exec -it (container ID) bash - to get into bash shell
