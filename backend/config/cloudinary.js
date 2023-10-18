const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: 'dqkmua29w',
    api_key: '265216998951688',
    api_secret: 'wbP4ZcM3Wy6KAWDDrGZUuUb1KJo',
    secure: true,
  });


module.exports = cloudinary;