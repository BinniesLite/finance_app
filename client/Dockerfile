FROM node:19-alpine

WORKDIR /usr/src/app
# because of docker compose without cntext, you have to start from the relative of the docker compose path
COPY ./client .

RUN yarn install

CMD ["yarn", "run", "dev"]