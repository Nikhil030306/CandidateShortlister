const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection - With better error handling
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/candidateDB';

console.log('Attempting to connect to MongoDB...');
console.log('MONGO_URI exists:', !!process.env.MONGO_URI);

mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
  })
  .catch(err => {
    console.log('❌ MongoDB connection error:', err.message);
    console.log('Please check your MONGO_URI environment variable');
  });

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Add Candidate
app.post('/api/candidates', async (req, res) => {
  try {
    res.json({ message: 'Candidate added' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Candidates
app.get('/api/candidates', async (req, res) => {
  try {
    res.json({ message: 'List of candidates' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Basic Match
app.post('/api/match', async (req, res) => {
  res.json({ message: 'Match results' });
});

// AI Shortlist
app.post('/api/ai/shortlist', async (req, res) => {
  res.json({ message: 'AI results' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});