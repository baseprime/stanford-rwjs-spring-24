import mongoose from 'mongoose'
import express from 'express'
import User from './models/user.js'
import Tweet from './models/tweet.js'

const app = express()
const url = 'mongodb+srv://greg:akVxwVkSB0xGaS7t@cluster0.bqyyhey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

async function main() {
    await mongoose.connect(url).then(() => console.log('Database Connected!'))

    app.get('/users', async (req, res) => {
        const allUsers = await User.find()
        res.send(allUsers)
    })

    app.get('/users/:id', async (req, res) => {
        const userId = req.params.id
        const user = await User.findOne({ _id: userId })
        res.send(user)
    })
    
    app.listen(3000, () => console.log('Server listening'))
}

main()
