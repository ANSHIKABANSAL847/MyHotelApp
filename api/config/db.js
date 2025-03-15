const { MongoClient } = require('mongodb');
//const url = 'mongodb://localhost:27017';
const url='mongodb+srv://bansalanshika847:Bansal-123@cluster09.wkkbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster09'
const client = new MongoClient(url);
const dbName = 'sample_mflix';
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

