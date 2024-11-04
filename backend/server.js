const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

const mongoUri = process.env.MONGO_URI;
let db;

// Connect to MongoDB
MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db();
    console.log('Connected to MongoDB');
  })
  .catch(error => console.error(error));

// Route to handle form submission
app.post('/submit-order', async (req, res) => {
  const { order_id, name, status } = req.body;
  
  if (!order_id || !name || !status) {
    return res.status(400).send("Please provide all required fields: order_id, name, and status.");
  }

  try {
    const ordersCollection = db.collection('orders');
    await ordersCollection.insertOne({ order_id, name, status });
    res.status(200).send("Order saved successfully.");
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).send("Failed to save order.");
  }
});

// Route to get all orders
app.get('/orders', async (req, res) => {
    try {
      const ordersCollection = db.collection('orders');
      const orders = await ordersCollection.find().toArray();
      res.json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).send("Failed to fetch orders.");
    }
  });
  

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
