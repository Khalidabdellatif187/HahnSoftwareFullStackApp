# Use a base image with Maven installed
FROM maven:3.8.4-openjdk-17-slim as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the project files into the container
COPY . /app

# Build the application
RUN mvn -f /app/pom.xml clean package -DskipTests

# Use a new image for the runtime environment
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the builder image
COPY --from=builder /app/target/EmployeeManagementSystemBackend-0.0.1-SNAPSHOT.jar /app

# Expose the port on which the application will run
EXPOSE 8888

# Set the command to run the application
CMD ["java", "-jar", "EmployeeManagementSystemBackend-0.0.1-SNAPSHOT.jar"]
