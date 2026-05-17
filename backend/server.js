const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
console.log('MONGO_URI from env:', process.env.MONGO_URI ? 'Set ✓' : 'NOT SET ✗');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/candidateDB')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.post('/api/candidates', async (req, res) => {
  res.json({ message: 'Candidate added' });
});

app.get('/api/candidates', async (req, res) => {
  res.json({ message: 'List of candidates' });
});

app.post('/api/match', async (req, res) => {
  res.json({ message: 'Match results' });
});

app.post('/api/ai/shortlist', async (req, res) => {
  res.json({ message: 'AI results' });
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});