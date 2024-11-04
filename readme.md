
# Order Management System

This project is a simple Order Management System that allows users to submit orders via a web form and view all submitted orders. The backend is built with Node.js and Express, while MongoDB is used for data storage. The frontend consists of HTML, CSS, and JavaScript, providing a user-friendly interface.

## Features

- Submit orders with Order ID, Name, and Status.
- View all submitted orders.
- Responsive design with basic styling.

## Project Structure

```
project-directory
│
├── backend
│   ├── Dockerfile           # Dockerfile for backend service
│   ├── package.json         # Node.js dependencies
│   ├── server.js            # Express server setup
│   └── public               # Static files for frontend
│       ├── index.html       # Welcome page
│       ├── form.html        # Order submission form
│       ├── view-orders.html # View submitted orders page
│       └── styles.css       # CSS styles
│
└── docker-compose.yml       # Docker Compose configuration
```

## Prerequisites

- Docker and Docker Compose installed on your machine.
- Basic knowledge of Node.js, Express, and MongoDB.

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Fazal-Rehaman07/Docker_MultiContainer.git
   cd project-directory
   ```

2. **Build and run the Docker containers**:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   Open your web browser and navigate to:
   ```
   http://localhost:3000/index.html
   ```

4. **Submit an Order**:
   - Fill out the form with the Order ID, Name, and Status, then click the "Submit Order" button.
   - The form will clear after submission, and you will see a success message.

5. **View Submitted Orders**:
   - Click on the "View Orders" button to navigate to the orders page, where you can see all the submitted orders.

## Stopping the Application

To stop the application, press `Ctrl+C` in the terminal where the Docker containers are running. To remove the containers, you can use:

```bash
docker-compose down
```

## Customizations

Feel free to customize the front-end files as per your needs.

----

# Running Order Management System Locally

This document outlines the steps to run the Order Management System project on your local machine without Docker.

## Prerequisites

1. **Node.js**: Ensure that Node.js is installed on your machine. You can download it from [the official Node.js website](https://nodejs.org/).
2. **MongoDB**: Install MongoDB on your machine. You can follow the instructions on the [MongoDB installation page](https://docs.mongodb.com/manual/installation/).
3. **Postman (optional)**: It can be helpful for testing your API endpoints.

## Step-by-Step Instructions

### 1. Clone the Project Repository

If you haven’t already cloned the project, do so using the following command (replace `<repository-url>` with your actual repository URL if applicable):

```bash
git clone https://github.com/Fazal-Rehaman07/Docker_MultiContainer.git
cd project-directory
```

### 2. Install Project Dependencies

Navigate to the backend directory of your project and install the required Node.js packages:

```bash
cd backend
npm install
```

This command will read the `package.json` file and install all necessary dependencies, such as Express and Mongoose.

### 3. Set Up MongoDB

1. **Start MongoDB**: 
   - If you have MongoDB installed locally, start the MongoDB server using the following command:
     ```bash
     mongod
     ```
   - By default, MongoDB listens on `mongodb://localhost:27017`.

2. **Create a Database** (Optional):
   - If you want to create a specific database for this project, you can use the MongoDB shell or any MongoDB client (like Compass) to create a database named `orders`. However, this is not strictly necessary as the application will create the database automatically upon first data insertion.

### 4. Start the Node.js Server

In the backend directory, start the server with the following command:

```bash
node server.js
```

### 5. Access the Application

Open your web browser and navigate to:

```
http://localhost:3000/index.html
```

This will take you to the welcome page of your application.

### 6. Submit an Order

- Click on the button to navigate to the **Order Submission Form**.
- Fill out the form with the Order ID, Name, and Status, then click the "Submit Order" button.
- You should see a success message indicating that the order has been submitted.

### 7. View Submitted Orders

- Click the **View Orders** button to navigate to the view orders page.
- This page will display all submitted orders retrieved from the MongoDB database.

## Stopping the Application

To stop the Node.js server, press `Ctrl+C` in the terminal where the server is running. If you started MongoDB in a separate terminal, you can stop it using the same `Ctrl+C` command.

## Additional Notes

- **Environment Variables**: If your application requires environment variables (like MongoDB connection strings), consider creating a `.env` file in the backend directory and using the `dotenv` package to load them. 
- **Testing API Endpoints**: You can use Postman or curl commands to test the API endpoints for submitting and retrieving orders.

## Troubleshooting

- **Port Already in Use**: If you get an error that the port (3000) is already in use, you can either stop the process using that port or change the port number in `server.js`.
- **MongoDB Connection Issues**: Ensure MongoDB is running and the connection string in `server.js` matches the default configuration.
- **Node.js Errors**: Ensure all dependencies are installed correctly and that you’re in the right directory.


