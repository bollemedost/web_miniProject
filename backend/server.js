// Loading required packages:
const express = require('express'); // Express framework for building the server
const mongoose = require('mongoose'); // Mongoose to talk to MongoDB database
const cors = require('cors'); // security tool; allows frontend and backend to talk to each other when they are on different ports
require('dotenv').config({ path: __dirname + '/.env' }); // load environment variables from .env file
const catRoutes = require('./routes/cats'); // Import the cat routes

const app = express(); // create an instance of the express server
app.use(cors()); // enable CORS for all routes
app.use(express.json()); // allows server to understand JSON data

app.use((req, res, next) => { // Middleware to log incoming requests
  console.log(`${req.method} ${req.url}`);
  next();
});

// Test route to check if the server is running
app.get('/', (req, res) => {
  res.send('Cat Matcher is running!');
});

const PORT = 3001; // Define the port the server will listen on

mongoose.connect(process.env.MONGO_URI) // Connect to MongoDB database 
    .then(() => console.log('Connected to MongoDB')) // Log success message if connection is successful
    .catch(err => console.error('Could not connect to MongoDB:', err)); // Log error message if connection fails 

app.use('/api/cats', catRoutes); // Use the cat routes for any requests to /api/cats
console.log('Cat routes registered');

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Start the server and log a message to the console
