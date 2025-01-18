export function ModalStaff(props,children) {
    return (
        <>
            <label>Staff Id :</label>
            <input type="text" placeholder="Staff Id" onChange={(e) => props.setStaffId(e.target.value)}
                   readOnly={true}/>
            <label>First Name :</label>
            <input type="text" placeholder="First Name" onChange={(e) => props.setFirstName(e.target.value)}/>
            <label>Last Name :</label>
            <input type="text" placeholder="Last Name" onChange={(e) => props.setLastName(e.target.value)}/>
            <label>Designation :</label>
            <input type="text" placeholder="Designation" onChange={(e) => props.setDesignation(e.target.value)}/>
            <label>Gender :</label>
            <select
                onChange={(e) => props.setGender(e.target.value)}
                required
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <label>Joined Date :</label>
            <input type="text" placeholder="Joined Date" onChange={(e) => props.setJoinedDate(e.target.value)}/>
            <label>DOB :</label>
            <input type="text" placeholder="DOB" onChange={(e) => props.setDOB(e.target.value)}/>
            <label>Address Line 1 :</label>
            <input type="text" placeholder="Address Line 1" onChange={(e) => props.setAddressLine1(e.target.value)}/>
            <label>Address Line 2 :</label>
            <input type="text" placeholder="Address Line 2" onChange={(e) => props.setAddressLine2(e.target.value)}/>
            <label>Address Line 3 :</label>
            <input type="text" placeholder="Address Line 3" onChange={(e) => props.setAddressLine3(e.target.value)}/>
            <label>Address Line 4 :</label>
            <input type="text" placeholder="Address Line 4" onChange={(e) => props.setAddressLine4(e.target.value)}/>
            <label>Address Line 5 :</label>
            <input type="text" placeholder="Address Line 5" onChange={(e) => props.setAddressLine5(e.target.value)}/>
            <label>Contact No:</label>
            <input type="text" placeholder="Contact No" onChange={(e) => props.setContactNo(e.target.value)}/>
            <label>Email :</label>
            <input type="text" placeholder="Email" onChange={(e) => props.setEmail(e.target.value)}/>
            <label>Role :</label>
            <select
                onChange={(e) => props.setRole(e.target.value)}
                required
            >
                <option value="Staff">Staff</option>
                <option value="Scientist">Scientist</option>
            </select>
            <label>FieldPage :</label>
            <select
                onChange={(e) => props.setStaffField(e.target.value)}
                required
            >
                <option value="FieldPage 1">FieldPage 1</option>
                <option value="FieldPage 2">FieldPage 2</option>
                <option value="FieldPage 3">FieldPage 3</option>
                <option value="FieldPage 4">FieldPage 4</option>
                <option value="FieldPage 5">FieldPage 5</option>
            </select>
            <label>Vehicle :</label>
            <select
                onChange={(e) => props.setStaffVehicle(e.target.value)}
                required
            >
                <option value="Vehicle A">Vehicle A</option>
                <option value="Vehicle B">Vehicle B</option>
                <option value="Vehicle C">Vehicle C</option>
            </select>

            <br/>

            <button className="button" onClick={props.handleStaffSubmit}>{props.children}</button>

        </>
    )
}