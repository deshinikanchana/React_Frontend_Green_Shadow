import { useState, useEffect } from "react";

export function ModalStaff({ handleStaffSubmit, staffData, setStaffData, children }) {
    const [memberId, setMemberId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('Male');
    const [joinedDate, setJoinedDate] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Staff');

    useEffect(() => {
        if (staffData) {
            setMemberId(staffData.member_id);
            setFirstName(staffData.first_name);
            setLastName(staffData.last_name);
            setDesignation(staffData.designation);
            setGender(staffData.gender);
            setJoinedDate(staffData.joined_Date);
            setDob(staffData.Dob);
            setAddress(staffData.address);
            setContactNo(staffData.contact_number);
            setEmail(staffData.email);
            setRole(staffData.role);
        }
    }, [staffData]);

    const handleSubmit = () => {
        const newStaff = {
            member_id: memberId,
            first_name: firstName,
            last_name: lastName,
            designation: designation,
            gender: gender,
            joined_Date: joinedDate,
            Dob: dob,
            address: address,
            contact_number: contactNo,
            email: email,
            role: role,
        };
        handleStaffSubmit(newStaff);
    };

    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <label>Staff Id:</label>
                    <input
                        type="text"
                        value={memberId}
                        onChange={(e) => setMemberId(e.target.value)}
                    />

                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label>Designation:</label>
                    <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                    />

                    <label>Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label>Joined Date:</label>
                    <input
                        type="text"
                        value={joinedDate}
                        onChange={(e) => setJoinedDate(e.target.value)}
                    />

                    <label>DOB:</label>
                    <input
                        type="text"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />

                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <label>Contact No:</label>
                    <input
                        type="text"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Role:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="Staff">Staff</option>
                        <option value="Scientist">Scientist</option>
                    </select>

                    <br />
                    <button className="save-btn" onClick={handleSubmit}>
                        {children}
                    </button>
                </div>
            </div>
        </>
    );
}
