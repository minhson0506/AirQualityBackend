import {Types, Document} from 'mongoose';

interface Device extends Document {
    deviceId: string;
    deviceName: string;
}

export {Device};