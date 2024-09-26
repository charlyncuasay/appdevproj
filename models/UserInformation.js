const db = require('../config/db');
const information = {
    save:(data, callback) =>{
        const query = "insert into crud (name, description, price, quantity) values(?, ?, ?, ?)";
        db.query(query, [data.product, data.description, data.price, data.quantity], callback);
    },
    getAllInformation: (callback) =>{
        const query = "select * from crud";
        db.query(query, callback);
    }
};
module.exports = information;