const Crops = require("../models/Crop")

const getAllCrops = async (req,res ) => {
    try {
        const userId = req.id
        const crops = await Crops.findAll({userId}).lean()

        if(!crops?.length) {
            return res.status(400).json({message: "No crops found."})
        }
        res.status(200).json(crops)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}