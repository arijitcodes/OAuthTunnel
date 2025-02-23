# Stage 1: Build the application
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production

# Stage 2: Create the final image
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Expose the port
ARG PORT=5943
EXPOSE ${PORT}

# Start the server
CMD ["node", "src/server.js"]