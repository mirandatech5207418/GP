import hoteleiroService from "../services/hoteleiroService.js";

const getAllHoteleiros = async (req, res) => {
  try {
    const hoteleiros = await hoteleiroService.getAllHoteleiros();
    res.json(hoteleiros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createHoteleiro = async (req, res) => {
  try {
    const hoteleiro = await hoteleiroService.createHoteleiro(req.body);
    res.status(201).json(hoteleiro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAllHoteleiros, createHoteleiro };
