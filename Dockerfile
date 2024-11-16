FROM node:22.9-alpine AS builder

WORKDIR /app

RUN yarn set version berry

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./
RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
