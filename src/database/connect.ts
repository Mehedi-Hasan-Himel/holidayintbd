import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  } else {
    const DATABASE_URL = process.env.DATABASE_URL;
    
    if (DATABASE_URL) {
      try {
        await mongoose.connect(DATABASE_URL, {
          dbName: "holiday-international",
          //   useNewUrlParser: true,
          //   useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("mongoDB connected!");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("MongoDB URI is not found");
    }
  }
}
