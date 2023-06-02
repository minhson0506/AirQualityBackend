import mongoose, {Schema} from "mongoose";
import {SensorData} from "../../interfaces/SensorData";

const sensorDataSchema = new Schema<SensorData>({
    device: {
        type: Schema.Types.ObjectId,
        ref: 'Device',
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    pm10: {
        type: Number,
        required: true
    },
    pm2_5: {
        type: Number,
        required: true
    },
    pm1: {
        type: Number,
        required: true
    },
    pm4: {
        type: Number,
        required: true
    },
    lux: {
        type: Number,
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    hum: {
        type: Number,
        required: true
    },
    pres: {
        type: Number,
        required: true
    },
    alt: {
        type: Number,
        required: true
    },
    co2: {
        type: Number,
        required: true
    },
    noise: {
        type: Number,
        required: true
    }
});

export default mongoose.model<SensorData>('SensorData', sensorDataSchema);