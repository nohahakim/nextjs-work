import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(image) {
  const imageBuffer = await image.arrayBuffer();
  const base64Data = Buffer.from(imageBuffer).toString("base64");

  const result = await cloudinary.uploader.upload(
    `data:${image.type};base64,${base64Data}`, // Correct data format
    { folder: "nextjs-course-mutations" }
  );

  return result.secure_url;
}
