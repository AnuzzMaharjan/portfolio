FROM node:22-alpine

WORKDIR /app

# Copy package.json first to leverage caching
COPY package.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application
COPY . .

# Expose Vite port
EXPOSE 5173

# Run the dev server with host flag to allow external access
CMD ["npm", "run", "dev", "--", "--host"]
