module.exports = function(db){

    let to_delete = {id: 4};

    db.collection("product").deleteMany(to_delete, function(err, res) {
        if (err) throw err;
        
        console.log(res.result.n + " documentes removed");
    });
}