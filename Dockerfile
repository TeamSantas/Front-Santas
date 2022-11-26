FROM node:16

WORKDIR /frontend

COPY ./package*.json ./frontend
RUN npm install

COPY / /frontend
RUN npm run build

CMD [“npm”, “start”]
EXPOSE 3000
