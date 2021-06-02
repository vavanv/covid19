# Prepare the app and create image
FROM node:10-alpine as build-step

LABEL version="1.0"
LABEL description="This is the base docker image for the Covid-19 app."
LABEL maintainer = ["vladimir.vorobiev@gmail.com"]

# Create a folder
RUN mkdir /docker_image

# Set the working directory of the application to /docker_image
WORKDIR /docker_image

# Self-explained
COPY package.json /docker_image

# Install all packages
RUN npm install

# Copy src to working folder
COPY . /docker_image

# Obvious
RUN npm run build

# Expose port 3010 on the container and start the application:
EXPOSE 3010
CMD ["npm", "start"]

# Stage 2
# In Stage 2, we are using the Nginx server image to create an Nginx server
# and deploy our app on it by copying build items from */docker_image/build*
# folder to the Nginx server at */usr/share/nginx/html* location.

FROM nginx:1.17.1-alpine


COPY --from=build-step /docker_image/build /usr/share/nginx/html