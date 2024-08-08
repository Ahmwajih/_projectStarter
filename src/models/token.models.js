const { Collection } = require('mongoose');
const {mongoose} = require('../config/database.config');

const tokenSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personnel',
        required: true,
        unique: true,
        index : true
    },

    token : {
        type: String,
        required: true,
        unique: true,
        index : true,
        trim: true,
    }
},
{
    Collection: 'tokens',
    timestamps: true
}
);

const Token = mongoose.model('Token', tokenSchema);