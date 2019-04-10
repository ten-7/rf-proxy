FROM node:8-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 4020

CMD [ "node" , "./server/server.js"]