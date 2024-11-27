import mongoose from 'mongoose';

const promptSchema = new mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt:{
        type:String,
        required:[true,'prompt required']
    },
    tag:{
        type:String,
        required:[true,'tag required']
    }
});

const Prompt = mongoose.models.Prompt || mongoose.model('Prompt', promptSchema);

module.exports = Prompt;