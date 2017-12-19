import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/get-from-object/:name', (req, res) => {
  res.send(req.params.name);
  request.get(`http://second:3000/get/?name=${req.params.name}`);
});

app.post('/set-in-object', (req, res) => {
  res.send(req.body);
  console.log(req.body);
  request.post('http://second:3000/set', JSON.stringify(req.body));
});

export default app;
