import { MongoClient } from "mongodb"

export async function connectToCluster(uri) {
    let mongoClient;

    console.log("in the function", uri)
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

export const getAllEvents = async () => {
    const uri = import.meta.env.VITE_DB_URI;
    console.log(uri)
    let mongoClient;

    try {
        console.log("got to here")
        mongoClient = await connectToCluster(uri);
        console.log("next")
        const db = mongoClient.db('free-food');
        const collection = db.collection('events');
        console.log("got through!")
    } finally {
        //await mongoClient.close();
    }
}

export const addEvent = async ({food, date, location, availability}) => {

}