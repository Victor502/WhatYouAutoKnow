//comment.model.js
// Load mongoose package
const mongoose = require('mongoose');

//file schema2
const FileSchema2 = new mongoose.Schema({
    comment: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean,
        default: false
    }
});


const Comment = mongoose.model('Comment', FileSchema2);

module.exports = Comment;
