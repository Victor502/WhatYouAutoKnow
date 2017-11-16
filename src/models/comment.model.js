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


const Comment = mongoose.model('Comment', FileSchema);

module.exports = Comment;

Comment.count({}, function (err, count) {
    if (err) {
        throw err;
    }
    if (count > 0) return;

    const comments = require('./file.seed.json');
    Comment.create(comments, function (err, newFiles) {
        if (err) {
            throw err;
        }
        console.log("DB seeded")
    });
});

