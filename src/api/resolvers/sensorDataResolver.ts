import {response} from "express";
import {SensorData} from "../../interfaces/SensorData";
import sensorDataModel from "../models/sensorDataModel";

export default {
    Query: {
        allSensorDatas: async () => {
            return await sensorDataModel.find();
        },
        //get latest data in last time
        latestSensorData: async () => {
            return await sensorDataModel.find().sort({time: -1}).limit(1);
        }
    },
};