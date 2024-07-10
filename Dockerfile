# Use the official Node.js 20 image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json app.js ./

# Install dependencies
RUN npm install &&\
    npm install express &&\
    npm install -y -g nodemon

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on (default is 3000 for many Node apps)
EXPOSE 3000

# Command to run your app
CMD ["node", "app.js"]
