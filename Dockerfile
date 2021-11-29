FROM node:16.13.0-alpine3.13 as build

RUN mkdir /app
WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install

ADD . .
RUN yarn export

FROM nginx:1.21.4-alpine

COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/out /app