import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../Models/User";
import { addUser, updateUserPassword } from "../Slices/UserSlice";
import { ModalUser } from "../components/ModalUser";
import { ModalEditUser } from "../components/ModalEditUser";
import '../Css/common.css';

export function UserPage() {
    const users = useSelector((state: any) => state.users);
    const dispatch = useDispatch();
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userNewPassword, setUserNewPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');

    const handleAddUser = () => {
        setIsAddUserModalOpen(true);
    };

    const handleEditProfile = (user: User) => {
        setSelectedUser(user);
        setUserEmail(user.email);
        setUserRole(user.role);
        setIsEditUserModalOpen(true);
    };

    const handleUserSubmit = () => {
        if (selectedUser) {
            const userExists = users.find((user: User) => user.email === userEmail);
            if (!userExists) {
                alert("User not found.");
                setIsEditUserModalOpen(false);
                return;
            }

            if (userPassword !== userExists.password) {
                alert("Current password is incorrect.");
                return;
            }

            if (userNewPassword !== userConfirmPassword) {
                alert("New password and confirm password do not match.");
                return;
            }

            // Update user password
            dispatch(updateUserPassword({ email: userEmail, newPassword: userNewPassword }));
            alert("Successfully changed password.");
            setIsEditUserModalOpen(false);
        } else {
            // Add new user logic
            dispatch(addUser({ email: userEmail, password: userPassword, role: userRole }));
            alert("User successfully added.");
            setIsAddUserModalOpen(false);
        }
    };

    if (!Array.isArray(users)) {
        return (
            <div className="p-6">
                <h1>User Details</h1>
                <p>No User available or data is still loading.</p>
            </div>
        );
    }

    const closePopup = () => {
        if(isEditUserModalOpen || isAddUserModalOpen) {
            setIsEditUserModalOpen(false);
            setIsAddUserModalOpen(false);
        }
    }
    return (
        <div className="p-[5.5rem] text-center" onClick={closePopup}>
            <h1>User Details</h1>
            <div className="text-center mb-8">
                <img
                    src="/public/assets/images/best_logo.jpeg"
                    alt="User Image"
                    className="w-[150px] h-[150px] rounded-full my-10 justify-self-center"
                />
                <h2>Keep your profile fresh and secure.</h2>
            </div>
                <button className="add-new-btn" onClick={handleAddUser}>Add User +</button>
                <button className="add-new-btn"
                        onClick={() => handleEditProfile({email: userEmail, password: '', role: userRole})}>
                    Edit Profile
                </button>

                {isAddUserModalOpen && (
                    <ModalUser
                        setUserEmail={setUserEmail}
                        setUserPassword={setUserPassword}
                        setUserRole={setUserRole}
                        handleUserSubmit={handleUserSubmit}
                    >
                        Add User
                    </ModalUser>
                )}

                {isEditUserModalOpen && selectedUser && (
                    <ModalEditUser
                        setUserEmail={setUserEmail}
                        setUserPassword={setUserPassword}
                        setUserRole={setUserRole}
                        setUserNewPassword={setUserNewPassword}
                        setUserConfirmPassword={setUserConfirmPassword}
                        handleUserSubmit={handleUserSubmit}
                    >
                        Edit Profile
                    </ModalEditUser>
                )}

                <div className="grid grid-cols-2 p-1 space-x-4">
                    <div className="col-span-6">
                        <table className="custom-table">
                            <thead className="custom-table-th">
                            <tr>
                                <td className="custom-table-td">User Email</td>
                                <td className="custom-table-td">User Role</td>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user: User) => (
                                <tr key={user.email}>
                                    <td className="custom-table-td">{user.email}</td>
                                    <td className="custom-table-td ">{user.role}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            );
            }
