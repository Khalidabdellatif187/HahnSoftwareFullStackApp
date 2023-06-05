# Use the node:latest base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the React application
RUN npm run build

# Expose the port on which your React application is running
EXPOSE 3000

# Set the entry point command to run your React application
CMD ["npm", "start"]
