FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY ./server/package.json ./

COPY ./server/yarn.lock ./

COPY ./server/tsconfig*.json ./

COPY ./server/nest-cli.json ./

RUN yarn --only=development

COPY ./server/ .

RUN yarn run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./server/package.json ./

COPY ./server/yarn.lock ./

COPY ./server/tsconfig*.json ./

COPY ./server/nest-cli.json ./

RUN yarn --only=production

COPY ./server/ .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]