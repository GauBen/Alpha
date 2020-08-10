# Build
FROM node:lts AS build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Serve
FROM nginx:alpine AS serve
COPY --from=build /app/_dist /usr/share/nginx/html
