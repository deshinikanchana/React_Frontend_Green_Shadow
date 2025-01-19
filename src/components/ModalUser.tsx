export function ModalUser(props: any) {
    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <label>Email :</label>
                    <input type="email" placeholder="User Email" onChange={(e) => props.setUserEmail(e.target.value)}/>

                    <label>Password :</label>
                    <input type="password" placeholder="Password"
                           onChange={(e) => props.setUserPassword(e.target.value)}/>

                    <label>Role :</label>
                    <select onChange={(e) => props.setUserRole(e.target.value)} required>
                        <option value="Admin">Admin</option>
                        <option value="Scientist">Scientist</option>
                        <option value="Manager">Manager</option>
                        <option value="Other">Other</option>
                    </select>

                    <br/>
                    <button className="button" onClick={props.handleUserSubmit}>{props.children}</button>
                </div>
            </div>
                </>
                );
                }
