# base image => alpine is the smallest version of node
FROM node:14.17.4-alpine 

# WORKDIR /the/workdir/path => keep the root of the container clean
WORKDIR /workdir

# COPY source destination => one by one!    destination = path from WORKDIR
COPY package.json .
COPY yarn.lock .

# RUN 
RUN yarn install

COPY pages pages
COPY public public
COPY styles styles
COPY .eslintrc .
COPY next.config.js .

# run it in the shell
RUN yarn build

# CMD [ "executable" ] => the entrypoint of the container, to keep it alive
CMD ["yarn", "start"]
