const databasefile = require('../config/db');

const insertuserdata = async (req, res) => {
    try {
        const db = await databasefile();
        const collection = db.collection('hotelsignup');

        const findresult = await collection.findOne({ email: req.body.email });
        console.log("Found User:", findresult);

        if (findresult) {
            if (findresult.password === req.body.password) {
                return res.status(200).json({
                    status: 200,
                    msg: "Record exists",
                });
            } else {
                return res.status(401).json({
                    status: 401,
                    msg: "Invalid password",
                });
            }
        } else {
            return res.status(400).json({
                status: 400,
                msg: "Record doesn't exist",
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ status: 500, msg: 'Error during login' });
    }
};

module.exports = { insertuserdata };

