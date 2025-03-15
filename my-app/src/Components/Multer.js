//this is to upload image using multer

import { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file");
            return;
        }
    
        const formData = new FormData();
        formData.append("profileimage", file);
    
        try {
            const response = await axios.post("http://localhost:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
    
            setImageUrl(response.data.fileUrl); // Get saved URL from backend
            alert("File uploaded and saved successfully!");
        } catch (error) {
            console.error("Upload failed:", error);
            alert("File upload failed!");
        }
    };
    
    
    return (
        <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
            <h2>Upload Image</h2>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>

            {imageUrl && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={imageUrl} alt="Uploaded" style={{ width: "100%", marginTop: "10px" }} />
                </div>
            )}
        </div>
    );
}

export default LoginForm;