var express = require('express'),
  logger = require('morgan')('dev'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  routes = require('./routes');




var PORT = process.env.PORT || 3000;


var app = express();

mongoose.connect('mongodb://localhost/crystalBlog');

app.use(express.static('public'));

app.use(logger);

app.post('*', bodyParser.urlencoded({
  extended: true
}));


app.use(bodyParser.json());

routes(app);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server error", err);
    process.exit(1);
  }

  console.log("Server is up and running on port", PORT);
})
