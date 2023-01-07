FROM node:16
WORKDIR /home/app
COPY index.js languages.js package.json ./
RUN npm install
CMD node /home/app/index.js
