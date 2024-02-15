FROM node:20.6.0

WORKDIR /app

COPY package*.json /app

RUN npm ci

COPY ./ ./

EXPOSE 8000

CMD ["npm", "run", "dev"]