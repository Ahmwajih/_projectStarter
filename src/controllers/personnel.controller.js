"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const {Personnel} = require('../models/personnel.model')

module.exports = {

    // GET ALL PERSONNEL:
    list: async (req, res) => {
        const personnel = await Personnel.find()
        res.json(personnel)
    }   

}