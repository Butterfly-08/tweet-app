const app = require('../realtime-twitter-subscription/backend/app');
const connectDB = require('../realtime-twitter-subscription/backend/config/db');
const mongoose = require('mongoose');

module.exports = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    await connectDB();
  }
  return app(req, res);
};
