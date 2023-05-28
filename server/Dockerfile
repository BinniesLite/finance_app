FROM node:19-alpine 

WORKDIR /usr/src/app/server

COPY ./server . 

ENV PATH = "/app/node_modules/.bin:${PATH}"


RUN yarn install
RUN apk add --no-cache bash

CMD ["yarn", "run", "dev"]


