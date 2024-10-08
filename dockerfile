FROM node:16

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 5173

# RUN npm run build
CMD ["npm", "run", "dev"]