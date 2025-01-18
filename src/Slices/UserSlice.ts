import {User} from "../Models/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : User[] = [
    {
        email: "deshini@gmail.com",
        password: "password123",
        role: "Admin",
    },
    {
        email: "nimali.fernando@example.com",
        password: "securePass456",
        role: "Scientist",
    },
    {
        email: "samanjayasinghe@example.com",
        password: "myPassword789",
        role: "Staff",
    }
];
const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        AddUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.findIndex(user => user.email === action.payload.email);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            return state.filter(user => user.email !== action.payload);
        }

    }
})

export const {AddUser,updateUser,deleteUser} = UserSlice.actions;
export default UserSlice.reducer;
