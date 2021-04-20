FROM node:14.7.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Covid-19 app."
LABEL maintainer = ["vavan.v@gmail.com"]

RUN mkdir /docker_image

WORKDIR /docker_image

COPY package.json /docker_image

RUN npm install

COPY . /docker_image

RUN npm run build

EXPOSE 3000

