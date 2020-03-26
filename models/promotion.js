const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// {
//     "name": "Mountain Adventure",
//     "image": "images/breadcrumb-trail.jpg",
//     "featured": true,
//     "cost": 1299,
//     "description": "Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided."
// }

// Schema Fields: All fields should be required except for "featured", and the name should be unique. 
// Timestamps: Ensure that each document created from this Schema will automatically be given CreatedAt and UpdatedAt fields.
// Cost: Use the mongoose-currency library's Currency type for the cost field.
// Model: Create a Model named Promotion from this Schema. 
// Export: Export the Promotion Model from this module. 

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;