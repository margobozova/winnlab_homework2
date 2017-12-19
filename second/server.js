import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const band = {
  name: 'The Killers',
  song: 'Mr. Brightside',
};

app.get('/get', (req, res) => {
  const { name } = req.query;
  res.send(band[name]);
});

app.post('/set', (req, res) => {
  const keys = Object.keys(req.body);
  keys.map(key => (band[key] = req.body[key]));
  res.send(band);
  console.log(band);
});

export default app;
