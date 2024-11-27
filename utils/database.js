import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('mongodb is already connected');
        return;
    }

    try{
        const url = process.env.MONGODB_URI;
        await mongoose.connect(url);
        isConnected = true;
        console.log('mongodb connected.');
    }catch(err){
        
        console.error(err);
    }
}
