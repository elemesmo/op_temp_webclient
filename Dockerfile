FROM node:alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

FROM node:alpine
USER node:node
WORKDIR /usr/src/app
COPY --from=builder --chown=node:node /usr/src/app/package*.json ./
COPY --from=builder --chown=node:node /usr/src/app/build ./build
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
ENV PORT 3000
EXPOSE 3000
CMD ["node", "build"]
