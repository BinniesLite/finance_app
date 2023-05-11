FROM node:19-alpine 

WORKDIR /usr/src/app/server

COPY ./server . 

ENV PATH = "/app/node_modules/.bin:${PATH}"

RUN yarn install

CMD ["yarn", "run", "dev"]
