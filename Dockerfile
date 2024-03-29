FROM node:19-alpine 

WORKDIR /usr/src/app

RUN apk add --no-cache bash
RUN apk add --no-cache postgresql-client

COPY ./ . 
COPY ./package.json .

RUN yarn install
CMD ["yarn", "run", "dev"]