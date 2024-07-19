const mongoose = require('mongoose');
let shortid = Math.floor(Math.random() * 1000000);

const URLSchema = new mongoose.Schema({
    longURL: {
        type: String,
        required: true,
    },
    shortId: {
        type: Number,
        required: true,
        default: (() => {return shortid++}),
    }
});

module.exports = mongoose.model('url', URLSchema);