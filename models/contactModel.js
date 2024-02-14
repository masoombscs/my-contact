const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add contact name"]
    },
    email: {
        type: String,
        required: [true, "Please add email address"]
    },
    experience: {
        type: String,
        required: [true, "Please add experience"]
    },
    query: {
        type: String,
        required: [true, "Please add Query"]
    },
    
},
{
    timestamps: true
});

module.exports  = mongoose.model("Contact", contactSchema);