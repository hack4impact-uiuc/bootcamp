const express = require('express');
const mongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const port = 3002
const client = new mongoClient(process.env.MONGODB_URI, { useNewUrlParser: true});
const app = express()

// export async function connectToCluster(uri) {
//     let mongoClient;

//     console.log("in the function", uri)
 
//     try {
//         mongoClient = new MongoClient(uri, { useNewUrlParser: true });
//         console.log('Connecting to MongoDB Atlas cluster...');
//         await mongoClient.connect();
//         console.log('Successfully connected to MongoDB Atlas!');
//         await listDatabases(mongoClient);
 
//         return mongoClient;
//     } catch (error) {
//         console.error('Connection to MongoDB Atlas failed!', error);
//         process.exit();
//     }
//  }

const getAllEvents = async () => {

    try {
        console.log("got to here")
        client.connect()
        console.log("next")
         await client.connect();
        // Send a ping to confirm a successful connection

        const db =  client.db('free-food');
        const collection = db.collection('events');

        const result = await collection.find({});
        console.log(result)
        console.log("got through!")
        return result;
    } finally {
        client.close();
    }
}


app.get('/', async (req, res) => {
  const test = await getAllEvents();
  res.send(test);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})