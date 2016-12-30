FROM node:6

MAINTAINER Thomas Maurin <thomas.maurin@d2-si.eu>

ARG version

LABEL eu.d2-si.application="attendees"
LABEL eu.d2-si.version="${version}"

# Install yarn to handle npm dependencies
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
        && echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
        && apt-get update && apt-get install -y \
                yarn \
        && rm -rf /var/lib/apt/lists/*

RUN yarn global add forever

WORKDIR /app
COPY . /app/
RUN yarn install

EXPOSE 3000
CMD ["forever", "--workingDir", "/app", "."]
