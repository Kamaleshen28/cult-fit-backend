const express = require('express');
const port = 7000;
const app = express();



app.use(express.json());


app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});