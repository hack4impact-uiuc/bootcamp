const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const cors = require('cors')
require('dotenv').config()


const port = 3002
const client = new mongoClient(process.env.MONGODB_URI, { useNewUrlParser: true});
const app = express()
app.use(cors())
app.use(express.json())

const getAllEvents = async () => {
    try {
        client.connect()
         await client.connect();
        // Send a ping to confirm a successful connection

        const db =  client.db('free-food');
        const collection = db.collection('events');

        const result = await collection.find({}).toArray();
        return result;
    } finally {
        client.close();
    }
}

const addEvent = async ({food, date, location, availability}) => {
  try {
    client.connect()
    await client.connect();

    const db =  client.db('free-food');
    const collection = db.collection('events');
    const eventDocument = {
      food: food,
      availability: availability,
      location: location,
      date: date
    } 

    const result = await collection.insertOne(eventDocument)
    return result
} finally {
    client.close();
}
}


app.get('/', async (req, res) => {
  const test = await getAllEvents();
  res.send(test);
})

app.post('/', async (req, res) => {
  const test = await addEvent(req.body);
  res.send(test);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})