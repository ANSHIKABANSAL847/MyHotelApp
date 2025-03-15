const { ObjectId } = require('mongodb');
const connectDB = require("../config/db");


const insertBooking = async (req, res) => {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookhotel");

    const { checkin, checkout, guests, roomType, priceOption, price } = req.body;

    // Validate request
    if (!checkin || !checkout || !guests || !priceOption || !roomType || !price) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if room is available for the selected dates
    const existingBooking = await bookingsCollection.findOne({
      roomType,
      $or: [
        {
          checkin: { $lte: checkout },
          checkout: { $gte: checkin }
        }
      ]
    });

    if (existingBooking) {
      return res.status(400).json({
        status: 400,
        msg: "Room is not available for selected dates"
      });
    }

    // Proceed with booking if room is available
    const bookingData = {
      checkin,
      checkout,
      guests,
      priceOption,
      roomType,
      price,
      createdAt: new Date()
    };

    const insertResult = await bookingsCollection.insertOne(bookingData);

    res.status(201).json({
      status: 201,
      msg: "Booking created successfully!",
      data: insertResult
    });
  } catch (error) {
    console.error("Error during booking creation:", error);
    res.status(500).json({
      status: 500,
      msg: "Error during booking creation",
      error: error.message
    });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection("bookhotel");
    const bookings = await collection.find({}).toArray();

    res.status(200).json({
      status: 200,
      msg: "Bookings retrieved successfully!",
      data: bookings
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      msg: "Error during fetching bookings",
      error: error.message
    });
  }
};


const deletedata = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection('bookhotel');

    const { id } = req.params; // <-- Get id from request params

    if (!id) {
      return res.status(400).json({
        status: 400,
        msg: "ID is required",
      });
    }

    const deleteresult = await collection.deleteOne({ _id: new ObjectId(id) });

    console.log("deleted documents =>", deleteresult);

    if (deleteresult.deletedCount > 0) {
      res.status(200).send({
        status: 200,
        msg: "Booking deleted successfully!",
      });
    } else {
      res.status(400).send({
        status: 400,
        msg: "No booking found with this ID",
      });
    }
  } catch (error) {
    console.error("Error during booking deletion:", error);
    res.status(500).send({
      status: 500,
      msg: "Error during booking deletion",
      error: error.message,
    });
  }
};



module.exports = { insertBooking, getAllBookings ,deletedata};





