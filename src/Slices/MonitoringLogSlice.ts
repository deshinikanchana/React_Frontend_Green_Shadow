import {Monitoring_log} from "../Models/Monitoring_log";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : Monitoring_log[] = [
    {
        log_code: "LOG-001",
        log_date: "2023-05-10",
        observation: "The wheat crops are growing well despite some early signs of pest activity.",
        observed_image: "/public/assets/images/crop7.jpeg",
        fields: ["Field 1" , "Field 3"],
        crops: ["Wheat","Soybean"],
        staff: ["Kasun Perera" , "Saman Jayasinghe"],
    },
    {
        log_code: "LOG-002",
        log_date: "2023-06-15",
        observation: "Rice crops are showing signs of water stress. Immediate irrigation required.",
        observed_image: "/public/assets/images/crop7.jpeg",
        fields: ["Field 2"],
        crops: ["Rice"],
        staff: ["Nimali Fernando"],
    },
    {
        log_code: "LOG-003",
        log_date: "2023-07-01",
        observation: "Soybean plants are thriving with optimal growth, but some weeds need to be removed.",
        observed_image: "/public/assets/images/crop7.jpeg",
        fields: ["Field 3"],
        crops: ["Soybean"],
        staff: ["Chamil Rajapaksha","Rashmi Wijesinghe"],
    }
];
const MonitoringLogSlice = createSlice({
    name:'log',
    initialState,
    reducers:{
        AddLog: (state, action) => {
            state.push(action.payload);
        },
        updateLog: (state, action: PayloadAction<Monitoring_log>) => {
            const index = state.findIndex(log => log.log_code === action.payload.log_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteLog: (state, action: PayloadAction<string>) => {
            return state.filter(log => log.log_code !== action.payload);
        }

    }
})

export const {AddLog,updateLog,deleteLog} = MonitoringLogSlice.actions;
export default MonitoringLogSlice.reducer;
