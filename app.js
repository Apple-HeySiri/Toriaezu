const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

//--------------------Web--------------------//

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
});

//--------------------Server--------------------//

app.listen(3000);
