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
export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUserPassword: (state, action) => {
            const { email, newPassword } = action.payload;
            const user = state.find((user) => user.email === email);
            if (user) {
                user.password = newPassword;
            }
        },
    },
});

export const {addUser,updateUserPassword} = UserSlice.actions;
export default UserSlice.reducer;
