import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import hoteleiroModel from "./hoteleiro.js";

const Hoteleiro = hoteleiroModel(sequelize, DataTypes);

export { sequelize, Hoteleiro };
