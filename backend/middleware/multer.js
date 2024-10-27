const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Prevents overwriting files
    }
});

const upload = multer({ storage: storage });
module.exports = upload;