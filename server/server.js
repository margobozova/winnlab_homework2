import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/get-from-object/:name', (req, res) => {
  console.log(req.params.name);
  res.send(req.params.name);
});

app.post('/set-in-object', (req, res) => {
  res.send(req.body);
});

export default app;
