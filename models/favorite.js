const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a new Mongoose Schema named favoriteSchema. 
// The favoriteSchema should have two fields: user and campsites. 
// Both should have the type of mongoose.Schema.Types.ObjectId
// The campsites field's properties should be enclosed in an array. 

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
}, {
    timestamps: true
});

// Create and export a Model named Favorite from this Schema.

module.exports = mongoose.model('Favorite', favoriteSchema);