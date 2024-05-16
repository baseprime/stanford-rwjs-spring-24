import { Schema, model } from 'mongoose'

const tweetSchema = new Schema({
    content: {
        type: String,
        required: true,
        maxlength: 280,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

export default model('Tweet', tweetSchema)
