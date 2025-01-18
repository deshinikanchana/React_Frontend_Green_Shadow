import {Equipment} from "../Models/Equipment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : Equipment[] = [
    {
        equipment_id: "EQ-001",
        name: "Axe",
        type: "Mechanical",
        status: "Available",
        staff: "Kasun Perera",
        field: "Field 1",
    },
    {
        equipment_id: "EQ-002",
        name: "Irrigation Pump",
        type: "Mechanical",
        status: "In Use",
        staff: "Nimali Fernando",
        field: "Field 2",
    },
    {
        equipment_id: "EQ-003",
        name: "Electric Generator",
        type: "Electrical",
        status: "Available",
        staff: "Saman Jayasinghe",
        field: "Field 3",
    }
];

const EquipmentSlice = createSlice({
    name:'equipment',
    initialState,
    reducers:{
        AddEquipment: (state, action) => {
            state.push(action.payload);
        },
        updateEquipment: (state, action: PayloadAction<Equipment>) => {
            const index = state.findIndex(eq => eq.equipment_id === action.payload.equipment_id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteEquipment: (state, action: PayloadAction<string>) => {
            return state.filter(eq => eq.equipment_id !== action.payload);
        }

    }
})

export const {AddEquipment,updateEquipment,deleteEquipment} = EquipmentSlice.actions;
export default EquipmentSlice.reducer;
