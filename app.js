const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>¡Desplegado con Azure DevOps!</h1>');
});

app.listen(port, () => {
  console.log(`App corriendo en puerto ${port}`);
});