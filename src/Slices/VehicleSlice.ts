import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Vehicle} from "../Models/Vehicle";

export const initialState : Vehicle[] = [
    {
        vehicle_code: "Vehicle-001",
        license_plate_number: "ABC-1234",
        vehicle_category: "Truck",
        fuel_type: "Diesel",
        status: "Available",
        staff: ["Kasun Perera","Nimali Fernando"],
        remarks: "Used for transporting crops between fields.",
    },
    {
        vehicle_code: "Vehicle-002",
        license_plate_number: "DEF-5678",
        vehicle_category: "Tractor",
        fuel_type: "Diesel",
        status: "In Use",
        staff: ["Saman Jayasinghe"],
        remarks: "Currently plowing Field 2.",
    },
    {
        vehicle_code: "Vehicle-003",
        license_plate_number: "GHI-9101",
        vehicle_category: "Van",
        fuel_type: "Petrol",
        status: "Under Maintenance",
        staff: ["Rashmi Wijesinghe"],
        remarks: "Scheduled for routine maintenance.",
    }
];

const VehicleSlice = createSlice({
    name:'vehicle',
    initialState,
    reducers:{
        AddVehicle: (state, action) => {
            state.push(action.payload);
        },
        UpdateVehicle: (state, action: PayloadAction<Vehicle>) => {
            const index = state.findIndex(vehicle => vehicle.vehicle_code === action.payload.vehicle_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        DeleteVehicle: (state, action: PayloadAction<string>) => {
            return state.filter(vehicle => vehicle.vehicle_code !== action.payload);
        }

    }
})

export const {AddVehicle,UpdateVehicle,DeleteVehicle} = VehicleSlice.actions;
export default VehicleSlice.reducer;
