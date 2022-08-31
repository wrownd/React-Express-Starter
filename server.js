const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/communities', cors(), (req, res) => {
  const communities = [
    {id: 101, name: 'Orangutans are very cool'},
    {id: 102, name: 'community #1'},
    {id: 103, name: 'community #2'},
  ];

  res.json(communities);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);