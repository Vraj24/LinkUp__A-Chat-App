import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async() => {

    const URL = process.env.DB_URL;

    try {
        await mongoose.connect(URL, {useUnifiedTopology:true})
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error.message);
    }
}

export default Connection;