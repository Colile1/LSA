const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// --- API Routes ---
// Placeholder for future routes
// const assessmentRoutes = require('./api/assessmentRoutes');
// const resultsRoutes = require('./api/resultsRoutes');
// const mlProxyRoutes = require('./api/mlProxyRoutes');

// app.use('/api/assessment', assessmentRoutes);
// app.use('/api/results', resultsRoutes);
// app.use('/api/ml', mlProxyRoutes);


// --- Root Route ---
// A simple route to confirm that the server is running
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Welcome to the LSA_backend API for the 4C Learning App!',
        status: 'Server is running successfully.' 
    });
});


// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`LSA_backend server is listening on port ${PORT}`);
});

module.exports = app; // For testing purposes
