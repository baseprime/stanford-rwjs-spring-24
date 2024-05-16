import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    tweets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet',
        },
    ],
})

export default model('User', userSchema)
