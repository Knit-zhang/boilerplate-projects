const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Successfully connect to MongoDB"))
        .catch(err => console.errror(err));
}

const UserSchema = new mongoose.Schema({
    name: String
})

const ExerciseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: Date
})

module.exports = {
    connect,
    User: mongoose.model('user', UserSchema),
    Exercise: mongoose.model('exercise', ExerciseSchema)
}