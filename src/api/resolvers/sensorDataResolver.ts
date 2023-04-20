import {response} from "express";
import {DeviceData, SensorData} from "../../interfaces/SensorData";
import sensorDataModel from "../models/sensorDataModel";

export default {
    Query: {
        allDevices: async () => {
            const response = await sensorDataModel.find().select('deviceId deviceName -_id')
            let devices: DeviceData[] = [];
            response.forEach((data: DeviceData) => {
                if (!devices.map(obj => obj.deviceId).includes(data.deviceId)) {
                    devices.push(data);
                }
            });
            return devices;
        },
        allSensorDatas: async () => {
            return await sensorDataModel.find();
        },
        //get latest data in last time
        latestSensorData: async () => {
            return await sensorDataModel.find().sort({time: -1}).limit(1);
        }
    },
};