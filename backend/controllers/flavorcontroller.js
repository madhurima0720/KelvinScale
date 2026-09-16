import Flavor from '../models/Flavor.js';

export const getFlavors = async (req, res) => {
  try {
    const flavors = await Flavor.find({});
    res.json(flavors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};