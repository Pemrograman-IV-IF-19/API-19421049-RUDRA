const multer = require('multer')
const randomString = require('randomstring')

var uploadFile = multer.diskStorage({
    filename : async function(req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        await cb(null, Date.now() + randomString.generate(7) + ext)
    },
    destination: async function (req, file, cb) {
        await cb(null, './public/images')
    }

})

module.exports = {
    uploadFile: uploadFile
}