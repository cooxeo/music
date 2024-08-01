import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    const connectionInstance = mongoose.connection.readyState;
    if(connectionInstance === 1){
        console.log("Already Connected")
        return;
    }
    if(connectionInstance === 2){
        console.log("connecting...")
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI!, {
            bufferCommands: false
        })
        console.log("DB Connection Established")
    } catch (error) {
        console.log("DB Connection Failed!!!")
        throw new Error("DB connection Errer!!!")
    }
}

export default connectDB;