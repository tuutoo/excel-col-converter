FROM node:18.4.0-alpine as build-stage

WORKDIR /app

RUN npm i -g pnpm

# Files required by pnpm install
COPY package.json pnpm-lock.yaml ./

# Bundle app source
COPY . .

RUN npx pnpm i --store=node_modules/.pnpm-store && npx pnpm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]