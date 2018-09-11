// var add;
var remove;
var update;
var read;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, {poolSize:10}, function(err, client) {
  if (err) throw err;

  const dbName = "mydb";
  const db = client.db(dbName);
  
  require('./create')(db);
  require('./add')(db);
  // require('./remove')(db);
  // require('./update')(db);
  // require('./read')(db);

  console.log("Database created!");
  // db.close();
});

