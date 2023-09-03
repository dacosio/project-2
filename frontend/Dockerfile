FROM node:16.16.0

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
