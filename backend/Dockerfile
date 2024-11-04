# Use the official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm install

# Copy app source and public folder
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
