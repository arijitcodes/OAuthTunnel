# Stage 1: Build the application
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --production

# Stage 2: Create the final image
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Expose the port
EXPOSE 5943

# Start the server
CMD ["bun", "run", "src/server.js"]