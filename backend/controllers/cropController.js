const Crops = require("../models/Crop")

/**
 * @swagger
 * /api/crops:
 *   get:
 *     summary: Get all crops for a user
 *     description: Retrieve all crops for the authenticated user.
 *     tags:
 *       - Crops
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: Bearer JWT authorization header
 *         type: string
 *         format: "Bearer {token}"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: A list of crops for the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Crop'
 *       400:
 *         description: No crops found for the user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
const getAllCrops = async (req,res ) => {
    try {
        const userId = req.id
        const crops = await Crops.find({userId}).lean()

        if(!crops?.length) {
            return res.status(400).json({message: "No crops found."})
        }
        res.status(200).json(crops)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const favoriteCrop = async (req,res) => {
    try {
        const {id, isFavorite} = req.body;
         const updatedCrop = await Crops.findByIdAndUpdate(id,{ $set: { isFavorite } },
      { new: true }
    );
        if (!updatedCrop) {
            return res.status(404).json({ message: 'Crop not found' });
        }
        res.status(200).json(updatedCrop)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const removeCrop = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedCrop = await Crops.findByIdAndRemove(id);

    if (!deletedCrop) {
      return res.status(404).json({ message: 'Crop not found' });
    }

    return res.json({ message: 'Crop deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  getAllCrops,
  favoriteCrop,
  removeCrop
};
