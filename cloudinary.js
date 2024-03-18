import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePaths) => {
    try {
        if (!localFilePaths) return null;

        const filePaths = Array.isArray(localFilePaths) ? localFilePaths : [localFilePaths];

        const uploadPromises = filePaths.map(async (localFilePath) => {
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            });
            return response;
        });

        const responses = await Promise.all(uploadPromises);
        
        return responses.length === 1 ? responses[0] : responses;
    } catch (error) {
        console.error("Error uploading files to Cloudinary:", error);
        return null;
    }
};



export {uploadOnCloudinary};