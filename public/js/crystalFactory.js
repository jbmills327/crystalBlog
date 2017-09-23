angular.module("MyApp")
  .factory("crystalfactory", crystalfactory);

crystalfactory.$inject = ["$http"];

function crystalfactory($http) {

  return {
    createBlog: function(blogData) {
      return $http.post("/api/blogs", blogData);
    },
    // getBlog: function(category) {
    //   category = category ? "/" + category : " ";
    //   return $http.get("/api/blogs" + category);
    // },
    getCat: function(category) {
      category = category ? "/" + category : " ";
      return $http.get("/api/blogs" + category);
    },
    editBlog: function(editData) {
      return $http.put("/api/blogs", editData);
    },
    deleteBlog: function(id) {
      id = id ? "/" + id : " ";
      return $http.delete("/api/blogs" + id)
    }
  }
}
