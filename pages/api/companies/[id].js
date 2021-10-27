
var cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: "eventjuicer",
    api_key: `${process.env.CLOUDINARY_API_KEY}`,
    api_secret: `${process.env.CLOUDINARY_API_SECRET}`
})

export default async function handler(req, res) {

    const { id } = req.query
    
    const query = await cloudinary.utils.download_folder(`teh20/${id}`, {
        target_public_id: `teh20_${id}_photos`,
        flatten_folders: true
    });
    
    res.status(200).json({zip: query})
}