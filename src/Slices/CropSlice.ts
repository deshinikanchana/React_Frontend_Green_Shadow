import {Crop} from "../Models/Crop";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : Crop[] = [
    {
        crop_code:"Crop-0001",
        common_name: "Wheat",
        scientific_name: "Triticum aestivum",
        crop_category: "Cereal",
        crop_season: "Winter",
        field: "Field 1",
        crop_img_url: "/public/assets/images/crop3.jpeg",
    },
    {
        crop_code:"Crop-0002",
        common_name: "Rice",
        scientific_name: "Oryza sativa",
        crop_category: "Cereal",
        crop_season: "Summer",
        field: "Field 2",
        crop_img_url: "/public/assets/images/crop2.jpeg",
    },
    {
        crop_code:"Crop-0003",
        common_name: "Soybean",
        scientific_name: "Glycine max",
        crop_category: "Legume",
        crop_season: "Spring",
        field: "Field 3",
        crop_img_url: "/public/assets/images/crop5.jpg",
    },
];
const CropSlice = createSlice({
    name:'crop',
    initialState,
    reducers:{
        AddCrop: (state, action) => {
            state.push(action.payload);
        },
        updateCrop: (state, action: PayloadAction<Crop>) => {
            const index = state.findIndex(crop =>crop.crop_code === action.payload.crop_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteCrop: (state, action: PayloadAction<string>) => {
            return state.filter(crop => crop.crop_code !== action.payload);
        }

    }
})

export const {AddCrop,updateCrop,deleteCrop} = CropSlice.actions;
export default CropSlice.reducer;
