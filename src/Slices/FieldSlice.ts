import {Field} from "../Models/Field";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : Field[] = [
    {
        field_code: "Field-001",
        field_name: "Field 1",
        location: "Farm 1",
        size: "50 acres",
        crops: ["Wheat","Corn"],
        staff: ["John","Mary"],
        image_1_url: "/public/assets/images/crop2.jpeg",
        image_2_url:"/public/assets/images/crop3.jpeg"
    },
    {
        field_code: "Field-002",
        field_name: "Field 2",
        location: "Farm 2",
        size: "75 acres",
        crops: ["Rice" , "Soybean"],
        staff: ["Alice" ," Bob"],
        image_1_url: "/public/assets/images/crop5.jpg",
        image_2_url:"/public/assets/images/crop6.jpg"
    },
    {
        field_code: "Field-003",
        field_name: "Field 3",
        location: "Farm 3",
        size: "60 acres",
        crops: ["Barley" , "Oats"],
        staff: ["Eve","Sam"],
        image_1_url: "/public/assets/images/crop7.jpeg",
        image_2_url:"/public/assets/images/crop3.jpeg"
    }
];


const FieldSlice = createSlice({
    name:'field',
    initialState,
    reducers:{
        AddField: (state, action) => {
            state.push(action.payload);
        },
        updateField: (state, action: PayloadAction<Field>) => {
            const index = state.findIndex(field => field.field_code === action.payload.field_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteField: (state, action: PayloadAction<string>) => {
            return state.filter(field => field.field_code !== action.payload);
        }

    }
})

export const {AddField,updateField,deleteField} = FieldSlice.actions;
export default FieldSlice.reducer;
