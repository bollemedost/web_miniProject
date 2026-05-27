const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({ // Define the schema for the Cat model
    name: String,
    age: Number,
    breed: String,
    personality: [String],
    goodWith: [String],
    energyLevel: String,
    shelter: String,
    image: String,
    description: String
});

module.exports = mongoose.model('cat', catSchema); // Export the Cat model so it can be used in other parts of the application