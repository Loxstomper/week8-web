module.exports = function(db){

    let to_add = [
        {id:0, name:"zeroth", price:"999", type:"misc", description:"Description of zeroth"},
        {id:1, name:"first", price:"999", type:"misc", description:"Description of first"},
        {id:2, name:"second", price:"999", type:"misc", description:"Description of second"},
        {id:3, name:"third", price:"999", type:"misc", description:"Description of third"},
        {id:4, name:"fourth", price:"999", type:"misc", description:"Description of fourth"}
    ]

    db.collection("product").insertMany(to_add, function(err, res) {
        if (err) throw err;
        console.log("Collection inserted!");
        console.log("Number of documents inserted: " + res.insertedCount);
    });

}
