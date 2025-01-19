import {Staff} from "../Models/Staff";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : Staff[] = [
    {
        member_id: "Staff-001",
        first_name: "Kasun",
        last_name: "Perera",
        designation: "Field Manager",
        gender: "Male",
        joined_Date: "2021-06-15",
        Dob: "1990-03-22",
        address: "Kahawatta",
        contact_number: "+94771234567",
        email: "kasunperera@example.com",
        role: "Admin",
        fields: ["Field 1","Field 3"],
        vehicles: ["Vehicle A ", "Vehicle B"],
    },
    {
        member_id: "Staff-002",
        first_name: "Yasindu",
        last_name: "Gunarathna",
        designation: "Soil Scientist",
        gender: "Male",
        joined_Date: "2021-06-15",
        Dob: "1990-03-22",
        address: "Dikwella",
        contact_number: "+9477321567",
        email: "Yasin@example.com",
        role: "Scientist",
        fields: ["Field 1", "Field 3"],
        vehicles: ["Vehicle A "," Vehicle B"]
    },
    {
        member_id: "Staff-003",
        first_name: "Mahisha",
        last_name: "Rathnayaka",
        designation: "Assistant Manager",
        gender: "Female",
        joined_Date: "2021-06-15",
        Dob: "1998-02-02",
        address: "Galle",
        contact_number: "+94702874567",
        email: "mahi@example.com",
        role: "Other",
        fields: ["Field 1" , "Field 3"],
        vehicles: ["Vehicle A" , "Vehicle B"]
    }

];

const StaffSlice = createSlice({
    name:'staff',
    initialState,
    reducers:{
        AddMember: (state, action) => {
            state.push(action.payload);
        },
        updateMember: (state, action: PayloadAction<Staff>) => {
            const index = state.findIndex(staff => staff.member_id === action.payload.member_id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteMember: (state, action: PayloadAction<string>) => {
            return state.filter(member => member.member_id !== action.payload);
        }

    }
})

export const {AddMember,updateMember,deleteMember} = StaffSlice.actions;
export default StaffSlice.reducer;
