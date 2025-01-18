export function ModalEditUser(props,children) {
    return (
        <>
            <label>Email :</label>
            <input type="email" placeholder="User Email" onChange={(e) => props.setUserEmail(e.target.value)}/>

            <label>Current Password :</label>
            <input type="password" placeholder="Current Password"
                   onChange={(e) => props.setUserPassword(e.target.value)}/>

            <label>Role :</label>
            <select
                onChange={(e) => props.setUserRole(e.target.value)}
                aria-readonly={true}
            >
                <option value="Admin">Admin</option>
                <option value="Scientist">Scientist</option>
                <option value="Manager">Manager</option>
                <option value="Other">Other</option>
            </select>

            <label>New Password :</label>
            <input type="password" placeholder="New Password"
                   onChange={(e) => props.setUserNewPassword(e.target.value)}/>

            <label>Confirm Password :</label>
            <input type="password" placeholder="Confirm Password"
                   onChange={(e) => props.setUserConfirmPassword(e.target.value)}/>

            <br/>
            <button className="button" onClick={props.handleUserSubmit}>{props.children}</button>
        </>
    );
}