// var add;
var remove;
var update;
var read;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

console.log("REMEMBER TO DROP THE COLLECTION - there can be duplicate documents");
console.log("ALL METHODS USE MANY, witll update many documents");

MongoClient.connect(url, {poolSize:10}, function(err, client) {
  if (err) throw err;

  const dbName = "mydb";
  const db = client.db(dbName);
  
  require('./create')(db);
  require('./add')(db);
  require('./remove')(db);
  require('./update')(db);
  require('./read')(db);

  // db.close();
});

