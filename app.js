const express = require ('express');
const app = express ();
const hero = require ('./router/hero');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// app.use ('/', (req, res) => {
//   res.send ('hello! contentwent');
// });

app.use ('/api', hero);
app.listen (3000, () => {
  console.log ('app listen on port 3000 ');
});
