const mongoose = require('mongoose');

const SingleSchema = new mongoose.Schema({
    subData : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "singles"
        }
    ]
});
const SingleModel = mongoose.model('singles', SingleSchema);
module.exports = SingleModel;