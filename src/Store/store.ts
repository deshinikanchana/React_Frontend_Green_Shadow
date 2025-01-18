import {configureStore} from "@reduxjs/toolkit";
import FieldSlice from "../Slices/FieldSlice";
import CropSlice from "../Slices/CropSlice";
import StaffSlice from "../Slices/StaffSlice";
import VehicleSlice from "../Slices/VehicleSlice";
import EquipmentSlice from "../Slices/EquipmentSlice";
import UserSlice from "../Slices/UserSlice";
import MonitoringLogSlice from "../Slices/MonitoringLogSlice";

export const store = configureStore({
    reducer: {
        fields:FieldSlice,
        crops:CropSlice,
        staffs:StaffSlice,
        vehicles:VehicleSlice,
        equipments:EquipmentSlice,
        users:UserSlice,
        monitoring_logs:MonitoringLogSlice
    },
})