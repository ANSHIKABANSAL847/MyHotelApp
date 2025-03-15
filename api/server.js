const express = require("express");
const cors = require("cors");
// for image upload 
const path = require("path");
const multer = require("multer");
const main = require('./config/db');  // Import the database connection
const authRoutes = require('./routes/index');


const app = express();
const PORT = 5000;
//const __dirname=path.resolve();//for deployment purposes

//  Middleware
app.use(cors({
    origin: "https://gopirajhotel.onrender.com/",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
//  Image Upload Route
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/', authRoutes);

//app.use(express.static(path.join(__dirname,"/my-app/dist")));//for deployment
// app.get('/',(_,res)=>{
//     res.sendFile(path.resolve(__dirname,"my-app","dist","index.html"));
// });
//  Multer Storage Configuration for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, "uploads");
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

//  Establish MongoDB Connection using `main()`
let db;
async function connectDB() {
    try {
        db = await main();  // Call main() from db.js
        console.log(" Connected to MongoDB via db.js");
    } catch (err) {
        console.error(" MongoDB Connection Error:", err);
    }
} 


app.post('/upload', upload.array('profileimages', 3), (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'Please upload at least one image' });
    }
  
    const fileUrls = req.files.map((file) => `http://localhost:5000/uploads/${file.filename}`);
    res.json({ fileUrls });
  });
  



app.get("/images", async (req, res) => {
    try {
        const imageCollection = db.collection("images");
        const images = await imageCollection.find().toArray();
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch images", error: error.message });
    }
});
// Start Server & Connect to DB
app.listen(PORT, async () => {
    await connectDB();  // Call DB connection function before handling requests
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


