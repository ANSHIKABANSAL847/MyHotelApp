const databaseFile = require("../config/db");
const { ObjectId } = require("mongodb"); // Ensure this line is at the top of your file
//const Image=require("../models/Image");

const getRooms = async (req, res) => {
  try {
    const db = await databaseFile();
    const collection = db.collection("rooms");

    const findResult = await collection.find({}).toArray();
    console.log("Find documents =>", findResult);

    res.send({
      status: 200,
      msg: findResult,
    });
  } catch (error) {
    res.status(500).send({ status: 500, msg: "Server Error" });
  }
};


const insertRoom = async (req, res) => {
  try {
    const db = await databaseFile();
    const collection = db.collection("rooms");

    const insertResult = await collection.insertOne(req.body);
    console.log("Inserted document =>", insertResult);

    res.send({
      status: 200,
      msg: insertResult,
    });
  } catch (error) {
    res.status(500).send({ status: 500, msg: "Failed to insert data" });
  }
};

const updateRoom = async (req, res) => {
  try {
    const db = await databaseFile();
    const collection = db.collection("rooms");

    const updateResult = await collection.updateOne(
      { type: req.query.type },
      { $set: req.body }
    );
    console.log("Updated document =>", updateResult);

    if (updateResult.modifiedCount > 0) {
      res.send({
        status: 200,
        msg: updateResult,
      });
    } else {
      res.send({
        status: 400,
        msg: "Data is not updated",
      });
    }
  } catch (error) {
    res.status(500).send({ status: 500, msg: "Update failed" });
  }
};

const deleteRoom = async (req, res) => {
    try {
      const db = await databaseFile();
      const collection = db.collection("rooms");
  
      const roomId = req.body.id; // Getting the ID from request body
      if (!roomId) {
        return res.status(400).send({ status: 400, msg: "Room ID is required" });
      }
  
      const deleteResult = await collection.deleteOne({ _id: new ObjectId(roomId) });
  
      if (deleteResult.deletedCount > 0) {
        res.send({
          status: 200,
          msg: "Room deleted successfully",
        });
      } else {
        res.send({
          status: 400,
          msg: "Room not found",
        });
      }
    } catch (error) {
      console.error("Error deleting room:", error);
      res.status(500).send({ status: 500, msg: "Deletion failed" });
    }
  };

  
module.exports = { getRooms, insertRoom, updateRoom, deleteRoom }; 


