const info = require('../models/UserInformation')
const proj = {
    index:(req, res) => {
        res.render('index');
    },
    crud:(req, res) => {
        info.getAllInformation((err, results) =>{
            if (err) throw err;
            res.render('list', {crud: results});
        });
    },
    save:(req, res) => {
        const data = req.body;
        info.save(data, (err) =>{
            if (err) throw err;
            res.redirect('/');
        })
    }
};

module.exports = proj;