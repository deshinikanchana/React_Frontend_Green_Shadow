import { useDispatch, useSelector } from "react-redux";
import { Staff } from "../Models/Staff";
import { useState } from "react";
import { ModalStaff } from "../components/ModalStaff";
import '../Css/common.css';
import {AddMember, deleteMember, updateMember} from "../Slices/StaffSlice";

export function StaffPage() {
    const staffs = useSelector((state: any) => state.staffs);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [staffData, setStaffData] = useState<Staff | null>(null);

    const handleStaffSubmit = (staff: Staff) => {
        if (staffData) {
            dispatch(updateMember(staff));
        } else {
            dispatch(AddMember(staff));
        }
        setIsModalOpen(false);
    };

    const handleAddStaff = () => {
        setStaffData(null);
        setIsModalOpen(true);
    };

    const handleEditStaff = (staff: Staff) => {
        setStaffData(staff);
        setIsModalOpen(true);
    };

    const handleDeleteStaff = (staffId: string) => {
        dispatch(deleteMember(staffId));
    };

    if (!Array.isArray(staffs)) {
        return (
            <div className="p-6">
                <h1>Staff Details</h1>
                <p>No staff available or data is still loading.</p>
            </div>
        );
    }

    const closePopup = () => {
        if(isModalOpen) {
            setIsModalOpen(false);
        }
    }
    return (
        <div className="p-[5.5rem] text-center" onClick={closePopup}>
            <h1>Staff Details</h1>
            <button className="add-new-btn" onClick={handleAddStaff}>Add Staff +</button>

            {isModalOpen && (
                <ModalStaff
                    handleStaffSubmit={handleStaffSubmit}
                    setStaffData={setStaffData}
                    staffData={staffData}
                >
                    {staffData ? 'Save Changes' : 'Save Staff'}
                </ModalStaff>
            )}

            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td">Staff Id</td>
                            <td className="custom-table-td">Name</td>
                            <td className="custom-table-td">Designation</td>
                            <td className="custom-table-td">Gender</td>
                            <td className="custom-table-td">Joined Date</td>
                            <td className="custom-table-td">DOB</td>
                            <td className="custom-table-td">Address</td>
                            <td className="custom-table-td">Contact No</td>
                            <td className="custom-table-td">Email</td>
                            <td className="custom-table-td">Role</td>
                            <td className="custom-table-td">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {staffs.map((staff: Staff) => (
                            <tr key={staff.member_id}>
                                <td className="custom-table-td">{staff.member_id}</td>
                                <td className="custom-table-td">{staff.first_name} {staff.last_name}</td>
                                <td className="custom-table-td">{staff.designation}</td>
                                <td className="custom-table-td">{staff.gender}</td>
                                <td className="custom-table-td">{staff.joined_Date}</td>
                                <td className="custom-table-td">{staff.Dob}</td>
                                <td className="custom-table-td">{staff.address}</td>
                                <td className="custom-table-td">{staff.contact_number}</td>
                                <td className="custom-table-td">{staff.email}</td>
                                <td className="custom-table-td">{staff.role}</td>
                                <td className="custom-table-td">
                                    <button className="edit-btn" onClick={() => handleEditStaff(staff)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDeleteStaff(staff.member_id)}>Delete</button>
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
