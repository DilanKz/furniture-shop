const path = require('path');
const upload = require('./uploadConfig');

const uploadFile = (req, res) => {
    return new Promise((resolve, reject) => {
        upload.single('image')(req, res, (err) => {
            if (err) {
                reject(err);
            } else {
                const filePath = path.join('/files/img', req.file.filename);
                resolve(filePath);
            }
        });
    });
};

module.exports = uploadFile;
