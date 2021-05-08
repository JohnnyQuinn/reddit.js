import cors from 'cors'

const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()
const port = 3000

//app setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`server.js listening at http://localhost:${port}`)
})