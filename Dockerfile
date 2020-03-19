FROM node:13.10.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY webpack.*.js ./
COPY src/* ./src/
COPY *.env ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN npm run build
# Bundle app source


EXPOSE $PORT
CMD [ "node", "dist/main.js" ]