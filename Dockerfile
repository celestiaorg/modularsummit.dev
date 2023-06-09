FROM node:19-alpine

RUN apk update && apk add build-base python3
RUN npm install --global gatsby-cli && gatsby telemetry --disable

WORKDIR /app
COPY ./package.json .
RUN npm install && gatsby clean
COPY . .

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
