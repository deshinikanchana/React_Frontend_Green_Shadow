export function ModalEquipment(props,children) {
    return (
        <>
            <label>Equipment Id :</label>
            <input type="text" placeholder="Equipment Id" onChange={(e) => props.setEquipmentId(e.target.value)}
                   readOnly={true}/>

            <label>Equipment Name :</label>
            <input type="text" placeholder="Equipment Name" onChange={(e) => props.setEquipmentName(e.target.value)}/>

            <label>Equipment Type :</label>
            <select
                onChange={(e) => props.setEquipmentType(e.target.value)}
                required
            >
                <option value="Electrical">Electrical</option>
                <option value="Mechanical">Mechanical</option>
            </select>

            <label>Status :</label>
            <select
                onChange={(e) => props.setEquipmentStatus(e.target.value)}
                required
            >
                <option value="Available">Available</option>
                <option value="In Use">In Use</option>
                <option value="Under Maintenance">Under Maintenance</option>
            </select>

            <label>Staff :</label>
            <select
                onChange={(e) => props.setEquipmentStaff(e.target.value)}
                required
            >
                <option value="Kasun Perera">Kasun Perera</option>
                <option value="Saman Jayasinghe">Saman Jayasinghe</option>
                <option value="Nimali Fernando">Nimali Fernando</option>
                <option value="Chamil Rajapaksha">Chamil Rajapaksha</option>
                <option value="Rashmi Wijesinghe">Rashmi Wijesinghe</option>
            </select>

            <label> FieldPage : </label>
            <select
                onChange={(e) => props.setEquipmentField(e.target.value)}
                required
            >
                <option value="FieldPage 1">FieldPage 1</option>
                <option value="FieldPage 2">FieldPage 2</option>
                <option value="FieldPage 3">FieldPage 3</option>
                <option value="FieldPage 4">FieldPage 4</option>
                <option value="FieldPage 5">FieldPage 5</option>
            </select>
            <br/>
            <button className="button" onClick={props.handleEquipmentSubmit}>{props.children}</button>

        </>


    );
}