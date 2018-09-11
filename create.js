module.exports = function(db){

  db.createCollection("product", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");

  });
}
