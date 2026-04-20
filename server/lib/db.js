import mongoose from "mongoose";

// console.log("MONGODB_URI:", process.env.MONGODB_URI);

// Function to connect to the mongodb database
export const connectDB = async () => {
    try {

        mongoose.connection.on('connected', ()=> console.log('Database Connected'));

        // await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
        await mongoose.connect(process.env.MONGODB_URI)
        
    } catch (error) {
        console.log(error)
    }
}