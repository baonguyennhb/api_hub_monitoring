FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm i npm@latest -g

COPY . .

EXPOSE 3000

CMD ["npm", "start"]