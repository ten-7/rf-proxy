const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port = 3000;
const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json({urlEnconded: true}));
app.use(cors());
app.listen(port, (err, success) => {
  if (err) console.log('Server run error')
  else console.log(`Server running on port ${port}`)
})
