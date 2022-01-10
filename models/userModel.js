const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    jobtype: String,
    dob: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');


module.exports = mongoose.model('user', userSchema);