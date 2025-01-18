export function MonitoringLog(props,children) {
    return (
        <>
            <label>Log Code :</label>
            <input type="text" placeholder="Log Code" onChange={(e) => props.setLogCode(e.target.value)}
                   readOnly={true}/>

            <label>Log Date :</label>
            <input type="text" placeholder="Log Date" onChange={(e) => props.setLogDate(e.target.value)}/>

            <label>Observation :</label>
            <input type="text" placeholder="Observation" onChange={(e) => props.setObservation(e.target.value)}/>

            <label>Observation Image :</label>
            <input
                type="file"
                id="observed-image"
                name="observed-image"
                accept="image/*"
                onChange={(e) => props.setObservedImage(e.target.value)}
                required
            />

            <label>FieldPage :</label>
            <select
                onChange={(e) => props.setLogField(e.target.value)}
                multiple={true}
                required
            >
                <option value="FieldPage 1">FieldPage 1</option>
                <option value="FieldPage 2">FieldPage 2</option>
                <option value="FieldPage 3">FieldPage 3</option>
                <option value="FieldPage 4">FieldPage 4</option>
                <option value="FieldPage 5">FieldPage 5</option>
            </select>

            <label>Crop :</label>
            <select
                onChange={(e) => props.setLogCrop(e.target.value)}
                multiple={true}
                required
            >
                <option value="Wheat">Wheat</option>
                <option value="Corn">Corn</option>
                <option value="Rice">Rice</option>
                <option value="Soybean">Soybean</option>
                <option value="Barley">Barley</option>
                <option value="Oats">Oats</option>
            </select>

            <label>Staff :</label>
            <select
                onChange={(e) => props.setLogStaff(e.target.value)}
                multiple={true}
                required
            >
                <option value="Kasun Perera">Kasun Perera</option>
                <option value="Saman Jayasinghe">Saman Jayasinghe</option>
                <option value="Nimali Fernando">Nimali Fernando</option>
                <option value="Chamil Rajapaksha">Chamil Rajapaksha</option>
                <option value="Rashmi Wijesinghe">Rashmi Wijesinghe</option>
            </select>

            <br/>
            <button className="button" onClick={props.handleLogSubmit}>{props.children}</button>
        </>
    );
}