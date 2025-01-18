import {useSelector} from "react-redux";
import {User} from "../Models/User";
import '../Css/common.css'

export function UserPage() {
    const users = useSelector((state: any) => state.users);

    if (!Array.isArray(users)) {
        return (
            <div className="p-6">
                <h1>User Details</h1>
                <p>No User available or data is still loading.</p>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            <h1>User Details</h1>
            <button className="add-new-btn">Add User +</button>
            <button className="add-new-btn">Edit Profile</button>
            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td ">User Email</td>
                            <td className="custom-table-td ">User Role</td>
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