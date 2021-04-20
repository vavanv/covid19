FROM node:14.7.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Covid-19 app."
LABEL maintainer = ["vavan.v@gmail.com"]


RUN mkdir /app

WORKDIR /app

COPY package.json /app


RUN npm install


COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]