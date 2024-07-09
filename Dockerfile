ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine as builder

WORKDIR /usr/src/app
ENV NODE_ENV development

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

#COPY . .

#COPY --from=builder /usr/src/app/node_modules ./node_modules
#COPY --from=builder /usr/src/app/prisma ./prisma
#COPY --from=builder /usr/src/app ./

USER node

EXPOSE 3000


CMD ["npm", "run", "start:dev"]
