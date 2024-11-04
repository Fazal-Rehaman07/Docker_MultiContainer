
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
