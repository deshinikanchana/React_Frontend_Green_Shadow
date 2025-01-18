export function ModalField(props,children) {

    return (
        <>
            <label>Field Code :</label>
            <input type="text" placeholder="Field Code" onChange={(e) => props.setFieldCode(e.target.value)}
                   readOnly={true}/>
            <label>Field Name :</label>
            <input type="text" placeholder="Field Name" onChange={(e) => props.setFieldName(e.target.value)}
                   required={true}/>
            <label>Field Location :</label>
            <input type="text" placeholder="Field Location" onChange={(e) => props.setFieldLocation(e.target.value)}
                   required={true}/>
            <label>Field Size :</label>
            <input type="text" placeholder="Field Size" onChange={(e) => props.setFieldSize(e.target.value)}/>
            <label>Crops :</label>
            <label htmlFor="crop-list">Crops:</label>
            <select
                onChange={(e) => props.setFieldCrop(e.target.value)}
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
                onChange={(e) => props.setFieldStaff(e.target.value)}
                multiple={true}
                required
            >
                <option value="John">John</option>
                <option value="Mary">Mary</option>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Eve">Eve</option>
                <option value="Sam">Sam</option>
            </select>
            <label>Field Image 1 :</label>
            <input
                type="file"
                id="field-image1"
                name="fieldImage1"
                accept="image/*"
                onChange={(e) => props.setFieldImage1(e.target.value)}
                required
            />
            <label>Field Image 2 :</label>
            <input
                type="file"
                id="field-image2"
                name="fieldImage2"
                accept="image/*"
                onChange={(e) => props.setFieldImage2(e.target.value)}
                required
            />
            <br/>
            <button className="button" onClick={props.handleFieldSubmit}>{props.children}</button>

        </>
    )
}