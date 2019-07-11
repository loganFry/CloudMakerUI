# Initial image for building app
FROM node:10.16-alpine as node-angular-cli
LABEL authors="Logan Fry"
 
# Build Angular app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build -- --prod

# Second stage, copy build assets and host with server
FROM node:10.16-alpine as cloud-ui
WORKDIR /app
COPY --from=node-angular-cli /app/dist/cloud-ui .
EXPOSE 80
ENV PORT 80
RUN npm install http-server -g
CMD [ "http-server" ]
