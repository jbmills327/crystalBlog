angular.module("MyApp")
  .controller("MainCtrl", mainController);

mainController.$inject = ["$http", "crystalfactory"];

function mainController($http, crystalfactory) {
  var main = this;
  main.id = "";
  main.newBlog = {};
  main.blogs = [];
  main.singleBlog = {};
  main.showAdd = true;
  main.showEdit = true;
  main.blogId = "";
  main.removeTheBlog = "";
  main.category = ["Life", "Oils"];

  main.addBlog = function() {
    crystalfactory.createBlog(main.newBlog)
      .then(function(err, retrurnData) {
        if (err) {
          console.log("This is the error", err);
        } else {
          console.log("This is the returnData", retrurnData);
        };
        main.newBlog = {};
      });
  }

  main.getBlog = function(category) {
    crystalfactory.getBlog(category)
      .then(function(returnData) {
        console.log("This is the returnData", returnData);
        if (returnData.data.length) {
          main.blogs = returnData.data;
        } else {
          main.singleBlog = returnData.data;
          console.log("This is single blog", main.singleBlog);
        }

      })
    main.blogId = "";
  }
  // main.getBlog();

  main.getCat = function(category) {
    crystalfactory.getCat(category)
      .then(function(returnData) {
        console.log("This is the returnData", returnData);
        if (returnData.data.length) {
          main.blogs = returnData.data;
        } else {
          main.singleBlog = returnData.data;
          console.log("This is single blog", main.singleBlog);
        }

      })
    main.blogId = "";
  }

  main.editBlog = function() {
    crystalfactory.editBlog(main.singleBlog)
      .then(function(err, returnData) {
        if (err) {
          console.log("This is the error", err);
        } else {
          console.log("This is the returnData", returnData);
        }
      })
  }

  main.removeBlogs = function(id) {
    crystalfactory.deleteBlog(id)
      .then(function(err, retrunData) {
        if (err) {
          console.log("This is the error", err);
        } else {
          console.log("This is the returnData", returnData);
        }
      })
    main.removeTheBlog = "";
  }

  main.showThatBlog = function() {
    main.showAdd = !main.showAdd;
    console.log('The button is working');
  }

  main.showThatEdit = function() {
    main.showEdit = !main.showEdit;
  }

  main.setId = function(objId) {
    main.id = objId;
    console.log("This is the main.id", main.id);
  }
}
