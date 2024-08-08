const jwt = require('jsonwebtoken');

const Personnel = require('../models/personnel.model');

module.exports = {
    login: async (req, res) => {
        const {username, password} = req.body;

if (username && password) {

const user = await Personnel.findOne(   {username, password}   );
}
