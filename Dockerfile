# Stage 1: Build the Next.js application
FROM node:18-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
