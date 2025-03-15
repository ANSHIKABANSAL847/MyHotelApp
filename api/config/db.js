const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables

const url = process.env.MONGO_URI;
//const url='mongodb+srv://bansalanshika847:Bansal-123@cluster09.wkkbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster09'
const client = new MongoClient(url);
//const dbName = 'sample_mflix';
const dbName = process.env.DB_NAME; 
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db;
    
   // const collection = db.collection('student'); 
  
    // the following code examples can be pasted here...
  
    //return collection;
  }
  module.exports =main;
  // config.js

