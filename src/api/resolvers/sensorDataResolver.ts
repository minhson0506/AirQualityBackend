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
        }
    },
};