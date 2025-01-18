import {useSelector} from "react-redux";
import {Staff} from "../Models/Staff";
import '../Css/common.css'

export function StaffPage() {
    const staffs = useSelector((state: any) => state.staffs);

    if (!Array.isArray(staffs)) {
        return (
            <div className="p-6">
                <h1>Staff Details</h1>
                <p>No Staff available or data is still loading.</p>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            <h1>Staff Details</h1>
            <button className="add-new-btn">Add Member +</button>
            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td ">Staff Id</td>
                            <td className="custom-table-td ">Name</td>
                            <td className="custom-table-td ">Designation</td>
                            <td className="custom-table-td ">Gender</td>
                            <td className="custom-table-td ">Joined Date</td>
                            <td className="custom-table-td ">DOB</td>
                            <td className="custom-table-td ">Address</td>
                            <td className="custom-table-td ">Contact No</td>
                            <td className="custom-table-td ">Email</td>
                            <td className="custom-table-td "> Role</td>
                            <td className="custom-table-td ">Fields</td>
                            <td className="custom-table-td ">Vehicles</td>
                            <td className="custom-table-td ">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {staffs.map((member: Staff) => (
                            <tr key={member.member_id}>
                                <td className="custom-table-td">{member.member_id}</td>
                                <td className="custom-table-td ">{member.first_name}  {member.last_name}</td>
                                <td className="custom-table-td">{member.designation}</td>
                                <td className="custom-table-td">{member.gender}</td>
                                <td className="custom-table-td">{member.joined_Date}</td>
                                <td className="custom-table-td">{member.Dob}</td>
                                <td className="custom-table-td">{member.address}</td>
                                <td className="custom-table-td">{member.contact_number}</td>
                                <td className="custom-table-td">{member.email}</td>
                                <td className="custom-table-td">{member.role}</td>
                                <td className="custom-table-td"> {member.fields.map((field, index) => (
                                    <div key={index}>{field}</div>
                                ))}</td>
                                <td className="custom-table-td">{member.vehicles.map((vehicle, index) => (
                                    <div key={index}>{vehicle}</div>
                                ))}</td>
                                <td className="custom-table-td">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}