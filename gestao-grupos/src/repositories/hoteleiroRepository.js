import { Hoteleiro } from "../models/index.js";

const getAllHoteleiros = async () => {
  return await Hoteleiro.findAll();
};

const createHoteleiro = async (hoteleiroData) => {
  return await Hoteleiro.create(hoteleiroData);
};

export { getAllHoteleiros, createHoteleiro };
