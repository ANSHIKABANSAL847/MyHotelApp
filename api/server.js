const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
const main = require("./config/db");
const authRoutes = require("./routes/index");

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: [
    "https://gopirajhotel.onrender.com",
    "https://gopirajhotel.onrender.com/",
    "http://localhost:3000",
    "http://localhost:3000/"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/', authRoutes);
app.use((req, res, next) => {
  console.log("Request Origin:", req.headers.origin);
  next();
});

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Multer to use Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "uploads", // Cloudinary folder
        format: async (req, file) => "png", // Convert all images to PNG
        public_id: (req, file) => Date.now() + '-' + file.originalname
    }
});

const upload = multer({ storage });

// Image Upload Route
app.post('/upload', upload.array('profileimages', 3), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'Please upload at least one image' });
    }
    
    const fileUrls = req.files.map((file) => file.path); // Cloudinary provides file.path as URL
    res.json({ fileUrls });
});

// Fetch Images Route
app.get("/images", async (req, res) => {
    try {
        const imageCollection = db.collection("images");
        const images = await imageCollection.find().toArray();
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch images", error: error.message });
    }
});

// Establish MongoDB Connection
let db;
async function connectDB() {
    try {
        db = await main();
        console.log("Connected to MongoDB via db.js");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
    }
}

// Start Server & Connect to DB
app.listen(PORT, async () => {
    await connectDB();
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
