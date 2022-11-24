#!/usr/bin/env node
FROM node:14.19.1

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
# RUN npm cache clear -f
RUN npm install

# Bundle app source
COPY . ./

EXPOSE 5000
CMD [ "npm", "start" ]
