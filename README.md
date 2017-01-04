# TIAD Attendees

Little dockerized nodejs app which displays a list of people.

## Usage
To build the Docker image:
```sh
$ docker build -t maur1th/attendees:0.1 --build-arg version=0.1 .
```

To run it (with mysql on localhost):
```sh
$ sudo docker run -e "DB_HOST=admin DB_NAME=attendees DB_USER=admin DB_HOST=localhost DB_PASSWORD=test" -d devops-crashcourse/attendees:0.1
```

#### Push to Docker HUB
1. Get an account on [Docker HUB](https://hub.docker.com).
2. Do what's next:

```sh
$ docker login
# Create a tag: https://docs.docker.com/engine/reference/commandline/tag/
docker tag maur1th/attendees:0.1 <account_name>/attendees:0.1
# Push a tag: https://docs.docker.com/engine/reference/commandline/push/
docker push <account_name>/attendees:0.1
```
