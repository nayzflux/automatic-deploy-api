# Build Image
FROM node:20.10.0-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build source code
RUN npm run build

# Production Image
FROM node:20.10.0-alpine as production

ENV NODE_ENV="production"
ENV PORT=3000

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm ci --only=production

# Copy build folder
COPY --from=build /app/dist ./dist

# Start application
CMD [ "npm", "run", "start" ]