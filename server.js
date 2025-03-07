const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/roll/:sides', (req, res) => {
  const sides = parseInt(req.params.sides);
  const result = Math.floor(Math.random() * sides) + 1;
  res.json({ sides, result });
});

app.get('/wakeup', (req, res) => {
  res.send('Server is awake');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running');
});
