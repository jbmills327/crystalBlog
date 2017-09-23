var express = require('express'),
  Crys = require("./controllers/crystalController");

var app = express();

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: './public/html'
    });
  });

  app.get('/about', (req, res) => {
    res.sendFile('about.html', {
      root: './public/html'
    });
  });

  app.get('/blogs', (req, res) => {
    res.sendFile('blogs.html', {
      root: './public/html'
    });
  });

  app.get('/oils', (req, res) => {
    res.sendFile('oils.html', {
      root: './public/html'
    });
  });

  app.post("/api/blogs", Crys.create);
  app.get("/api/blogs", Crys.get);
  // app.get("/api/blogs/:id", Crys.get);
  app.get("/api/blogs/:category", Crys.getCat);
  app.put("/api/blogs/", Crys.edit);
  app.delete("/api/blogs/:id", Crys.delete);
}
