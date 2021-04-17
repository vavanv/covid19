FROM node:14.7.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Covid-19 app."
LABEL maintainer = ["vavan.v@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]