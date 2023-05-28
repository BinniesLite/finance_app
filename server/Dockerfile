FROM node:19-alpine 

WORKDIR /usr/src/app/server

COPY ./server . 

# ENV PATH = "/app/node_modules/.bin:${PATH}"


RUN yarn install
# Install nodemon globally
RUN yarn global add nodemon
CMD ["yarn", "run", "dev"]


