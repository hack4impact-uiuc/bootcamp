import { MongoClient } from "mongodb"


/**
 * Gets all free food events in the database.
 * @returns Promise containing an array of free food event objects
 */
export const getAllEvents = async () => {
    const response = await fetch("http://localhost:3002")
    return await response.json()
}

/**
 * 
 * @param food String representing what food will be served
 * @param date Date object representing the date/time of the event
 * @param location String representing where the event will be
 * @param availability String representing who can come to the event
 * @returns Promise containing an object acknowledging the added event
 */
export const addEvent = async ({food, date, location, availability}) => {
    const addEventRequest = new Request("http://localhost:3002", {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({
            food: food,
            availability: availability,
            location: location,
            date: date
        })
    })
    const response = await fetch(addEventRequest)
    return await response.json()
}