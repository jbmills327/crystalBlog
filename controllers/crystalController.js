var CRYS = require('../models/crystalModel');

module.exports = {
  create: (req, res) => {
    var newDoc = new CRYS(req.body);
    console.log(newDoc);

    newDoc.save((err, doc) => {
      if (err) {
        return res.send(err);
      }
      console.log(doc);
      res.send(doc);
    });
  },
  // get: (req, res) => {
  //   CRYS.find({
  //     createdBy: req.params.id
  //   }, (err, docs) => {
  //     if (err) {
  //       res.send(err);
  //     }
  //     res.json(docs);
  //   })
  //
  // }
  get: (req, res) => {
    if (req.params.id) {
      CRYS.findOne({
        _id: req.params.id
      }, (err, docs) => {
        if (err) {
          console.log("This is the error", err);
        }
        if (!docs) {
          return res.send("Nothing with that ID");
        }
        res.json(docs);
      });
    } else {
      CRYS.find({}, (err, docs) => {
        if (err) {
          res.send("This is the error", err);
        }
        res.json(docs);
      });
    }
  },

  getCat: (req, res) => {
    if (req.params.category) {
      CRYS.find({
        category: req.params.category
      }, (err, docs) => {
        if (err) {
          console.log("This is the error", err);
        }
        if (!docs) {
          return res.send("Nothing with that category");
        }
        res.json(docs);
      });
    }
  },

  edit: (req, res) => {
    var newVar = {
      "name": req.body.name,
      "image": req.body.image,
      "description": req.body.description,
      "textBody": req.body.textBody,
      "date": req.body.date
    };
    CRYS.findOneAndUpdate({
      "_id": req.body._id
    }, newVar, {
      new: true
    }, (err, doc) => {
      if (err) {
        return res.send("This is the error", err);
      }
      console.log("This is the doc", doc);
      res.send(doc);
    });
  },

  delete: (req, res) => {
    CRYS.findByIdAndRemove({
      "_id": req.params.id
    }, (err, item) => {
      var response = {
        message: "Item was deleted",
        id: req.body.id
      };
      if (err) {
        console.log("This is the error");
      } else {
        res.send(response);
      };
    });
  }
}
