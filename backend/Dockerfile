FROM node:16.16.0

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3500

CMD [ "node", "server.js" ]
