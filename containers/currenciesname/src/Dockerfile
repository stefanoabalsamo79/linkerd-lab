FROM node:16
WORKDIR /home/app
COPY index.js currenciesName.js package.json ./
RUN npm install
CMD node /home/app/index.js
