import sensorDataModel from "../models/sensorDataModel";

export default {
    Query: {
        sensorDatas: async () => {
            return await sensorDataModel.find();
        },
    },
};