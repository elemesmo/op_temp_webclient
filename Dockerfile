FROM node:17.8.0-alpine3.15 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

FROM node:17.8.0-alpine3.15
USER node:node
WORKDIR /usr/src/app
COPY --from=builder --chown=node:node /usr/src/app/build ./build
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
ENV PORT 5050
EXPOSE 5050
CMD ["node", "build"]
