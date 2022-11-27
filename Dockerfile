FROM node:16-alpine
WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm run build
COPY . .

CMD ["npm", "start"]
EXPOSE 3000
