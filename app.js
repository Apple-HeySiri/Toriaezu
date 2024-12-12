const express = require('express');

const app = express();

app.use(express.json());

//--------------------Web--------------------//

app.get('/', (req, res) => {
  res.sendHtml(');
});

//--------------------Server--------------------//

app.listen(3000);
