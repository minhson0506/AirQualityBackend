import mongoose from "mongoose";
import {Device} from "../../interfaces/Device";

const deviceModel = new mongoose.Schema<Device>({
    deviceId: {
        type: String,
        required: true,
        unique: true
    },
    deviceName: {
        type: String,
        required: true
    }
});

export default mongoose.model<Device>('Device', deviceModel);