const express = require('express');
const logger = require('morgan')
const app = express();
const routes = require('./routes/index.js')

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', routes)
app.use(express.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Magic happening on port  + ${PORT}`);
})