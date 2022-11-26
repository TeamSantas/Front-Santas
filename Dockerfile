FROM node:16

WORKDIR /frontend

COPY package.json ./
COPY yarn.lock ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD [“npm”, “start”]
