## Dev configuration for image creation

```yml
# FROM node:13.12.0-alpine
FROM node:lts-alpine3.13

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

CMD [ "npm","start" ]
```