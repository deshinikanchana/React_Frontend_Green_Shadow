export function ModalVehicle(props,children) {
    return (
        <>
            <label>Vehicle Code :</label>
            <input type="text" placeholder="Vehicle Code" onChange={(e) => props.setVehicleCode(e.target.value)}
                   readOnly={true}/>

            <label>License Plate Number :</label>
            <input type="text" placeholder="License Plate Number"
                   onChange={(e) => props.setLicenseNumber(e.target.value)}/>

            <label>Vehicle Category :</label>
            <input type="text" placeholder="Vehicle Category"
                   onChange={(e) => props.setVehicleCategory(e.target.value)}/>

            <label>Fuel Type :</label>
            <input type="text" placeholder="Fuel Type" onChange={(e) => props.setFuelType(e.target.value)}/>

            <label>Status :</label>
            <input type="text" placeholder="Status" onChange={(e) => props.setVehicleStatus(e.target.value)}/>

            <label>Staff :</label>
            <select
                onChange={(e) => props.setVehicleStaff(e.target.value)}
                multiple={true}
                required
            >
                <option value="Kasun Perera">Kasun Perera</option>
                <option value="Saman Jayasinghe">Saman Jayasinghe</option>
                <option value="Nimali Fernando">Nimali Fernando</option>
                <option value="Chamil Rajapaksha">Chamil Rajapaksha</option>
                <option value="Rashmi Wijesinghe">Rashmi Wijesinghe</option>
            </select>

            <label>Remarks :</label>
            <input type="text" placeholder="Remarks" onChange={(e) => props.setRemarks(e.target.value)}/>

            <br/>
            <button className="button" onClick={props.handleVehicleSubmit}>{props.children}</button>

        </>
    );
}