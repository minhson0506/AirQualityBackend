import {Device} from "../../interfaces/Device";
import {SensorData} from "../../interfaces/SensorData";
import deviceModel from "../models/deviceModel";

export default {
    SensorData: {
        device: async (parent: SensorData) => {
            return await deviceModel.findById(parent.device);
        },
    },
    Query: {
        //get all devices
        allDevices: async () => {
            return await deviceModel.find();
        }
    },
    Mutation: {
        //add new device
        addDevice: async (parent: unknown, args: Device) => {
            const device = new deviceModel(args);
            return await device.save();
        },
        // update device
        updateDevice: async (parent: unknown, args: Device) => {
            return await deviceModel.findByIdAndUpdate(args.id, args, {new: true});
        },
        // delete device
        deleteDevice: async (parent: unknown, args: {id: string}) => {
            return await deviceModel.findByIdAndDelete(args.id);
        },
    },
};

