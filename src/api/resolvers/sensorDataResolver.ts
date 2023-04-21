import deviceModel from "../models/deviceModel";
import sensorDataModel from "../models/sensorDataModel";

export default {
    Query: {
        //get all data
        allSensorDatas: async (parent: unknown, args: {deviceName: string}) => {
            // find all data with deviceName in device
            const device = await deviceModel.findOne({deviceName: args.deviceName});
            // find all data with device
            return await sensorDataModel.find({device: device});
        },
        //get latest data in last time
        latestSensorData: async (parent: unknown, args: {deviceName: string}) => {
            const device = await deviceModel.findOne({deviceName: args.deviceName});
            return await sensorDataModel.find({device: device}).sort({time: -1}).limit(1);
        },
        sensorDataInDate: async (parent: unknown, args: {deviceName: string, date: string}) => {
            const device = await deviceModel.findOne({deviceName: args.deviceName});
            const today = new Date(args.date);
            const tomorrow = new Date(today.getTime() + 86400000);
            return await sensorDataModel.find({device: device, time: {$gte: today, $lt: tomorrow}});
        }
    },
    Mutation: {
        //add new data
        addSensorData: async (parent: unknown, args: {deviceName: string, time: string, pm10: number, pm2_5: number, pm1: number, pm4: number, lux: number, temp: number, hum: number, pres: number, alt: number, co2: number, noise: number}) => {
            const device = await deviceModel.findOne({deviceName: args.deviceName});
            const sensorData = new sensorDataModel({
                device: device,
                time: args.time,
                pm10: args.pm10,
                pm2_5: args.pm2_5,
                pm1: args.pm1,
                pm4: args.pm4,
                lux: args.lux,
                temp: args.temp,
                hum: args.hum,
                pres: args.pres,
                alt: args.alt,
                co2: args.co2,
                noise: args.noise
            });
            return await sensorData.save();
        },
        deleteSensorData: async (parent: unknown, args: {_id: string}) => {
            return await sensorDataModel.findByIdAndDelete(args._id);
        },
    },
};