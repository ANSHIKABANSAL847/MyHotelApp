const express=require('express');
const router=express.Router();
const signup=require('../Controller/signup');
const login=require('../Controller/login');
const bookhotel = require('../Controller/Managebooking');
//const user=require('../Controller/ManageUser');
const room=require('../Controller/ManageRoom');
const { sendContactMail } = require('../Controller/contact');


//api for contactus page
router.post('/contact', sendContactMail);

// api for  sign up page
router.post('/signup',signup.insertdata)
router.get('/signup',signup.getdata)
router.put('/signup',signup.updatedata)
router.delete('/signup',signup.deletedata)

// api for car login page
router.post('/login',login.insertuserdata)

// api for booking page
router.post('/bookings', bookhotel.insertBooking); // Create a new booking
router.get('/bookings', bookhotel.getAllBookings); // Get all bookings
router.delete('/bookings/:id', bookhotel.deletedata); // Delete a booking by ID


// api for room page
 router.get('/rooms', room.getRooms); // Get all rooms
 router.post('/rooms', room.insertRoom); // Create a new room
 router.put('/rooms', room.updateRoom); // Update a room
 router.delete('/rooms', room.deleteRoom);


module.exports=router
