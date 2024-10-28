import {
  getAllHoteleiros,
  createHoteleiro,
} from "../repositories/hoteleiroRepository.js";

const getAllHoteleirosService = async () => {
  return await getAllHoteleiros();
};

const createHoteleiroService = async (hoteleiroData) => {
  return await createHoteleiro(hoteleiroData);
};

export default {
  getAllHoteleiros: getAllHoteleirosService,
  createHoteleiro: createHoteleiroService,
};
