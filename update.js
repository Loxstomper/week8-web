module.exports = function(db){

    let to_update = {id: 3};
    let new_description = { $set: {description: "This is the updated description for id 3"}};

    db.collection("product").updateMany(to_update, new_description, function(err, res) {
        if (err) throw err;
        
        console.log(res.result.nModified + " documentes updated");
    });
}