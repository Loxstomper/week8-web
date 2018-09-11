
module.exports = function(db){


    db.collection("product").find({}).toArray(function(err, result) {
        if (err) throw err;

        console.log(result);
        
    });
}