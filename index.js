/*
npm install mongodb
create new project with npm  init
create index.js and add the following code
*/
var MongoClient = require('mongodb').MongoClient;
// Converting string into ObjectId 
// type before querying 
var ObjectID = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017";
MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },
    function(err, client) {
        const db = client.db("shopping");
        db.collection("products").insertOne({name:'NZ'});

        db.collection("products").findOne(
            {_id: new ObjectID('5d5d3fbac948c18c8e77a8d1')},
            function(err,result) {console.log(result.name);}
        );  
        client.close();
    }
);
