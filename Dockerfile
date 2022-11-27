FROM node:16-alpine

# Copy dependencies first for effective caching
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

CMD [“npm”, “start”]
EXPOSE 3000
