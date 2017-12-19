import app from './server';

const port = process.env.PORT || 3008;

app.listen(port, () => console.log('Hello', port));
