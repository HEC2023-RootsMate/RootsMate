FROM node:20-alpine as builder

WORKDIR /opt/app
COPY . /opt/app

RUN npm install -g @angular/cli && npm install && npm run build

FROM nginx:1.25-alpine

COPY --from=builder /opt/app/dist/roots-mate /usr/share/nginx/html
COPY docker/rootsmate.nginx /etc/nginx/conf.d/default.conf
