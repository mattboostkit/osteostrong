const express = require('express');
const serverless = require('serverless-http');
const { registerRoutes } = require('../../dist/server/routes');
const { serveStatic } = require('../../dist/server/vite');
const session = require('express-session');
const passport = require('passport');
const MemoryStore = require('memorystore')(session);

const app = express();

// Middleware
app.use(express.json());

// Session configuration
const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  }
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

// Static files
serveStatic(app);

// Register API routes
registerRoutes(app);

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