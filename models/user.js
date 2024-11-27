import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        unique:[true, 'email taken'],
        required:[true,'email required']
    },
    username:{
        type:String,
        required:[true, 'username required'],
        
    },
    image:{
        type: String
    }

})

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;