const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// --- API Routes ---
// Import the route handlers
const assessmentRoutes = require('./api/assessmentRoutes');
const resultsRoutes = require('./api/resultsRoutes');
const mlProxyRoutes = require('./api/mlProxyRoutes');

// Register the route handlers
app.use('/api/assessment', assessmentRoutes);
app.use('/api/results', resultsRoutes);
app.use('/api/ml', mlProxyRoutes);

// --- Root Route for Health Check ---
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Welcome to the LSA_backend API for the 4C Learning App!',
        status: 'Server is running successfully.' 
    });
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`LSA_backend server is listening on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app;
