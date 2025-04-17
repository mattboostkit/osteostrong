const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Middleware
app.use(express.json());

// Simple API routes for Netlify function
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV });
});

// Sanity configuration endpoint
app.get('/api/sanity-config', (req, res) => {
  res.json({
    projectId: process.env.VITE_SANITY_PROJECT_ID || '6ff7gi0z',
    dataset: process.env.VITE_SANITY_DATASET || 'production',
    apiVersion: process.env.VITE_SANITY_API_VERSION || '2023-05-03'
  });
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  try {
    // In a real implementation, you would validate and store the data
    console.log('Contact form submission:', req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting the contact form'
    });
  }
});

// Booking endpoint
app.post('/api/booking', (req, res) => {
  try {
    // In a real implementation, you would validate and store the data
    console.log('Booking submission:', req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the booking'
    });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'An error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
  });
});

// Export the serverless function
module.exports.handler = serverless(app);