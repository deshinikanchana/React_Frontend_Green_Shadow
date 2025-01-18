export function ModalCrop (props,children) {
    return (
        <>
            <label>Crop Code :</label>
            <input type="text" placeholder="Crop Code" onChange={(e) => props.setCropCode(e.target.value)}
                   readOnly={true}/>

            <label>Crop Common Name :</label>
            <input type="text" placeholder="Crop Common Name"
                   onChange={(e) => props.setCropCommonName(e.target.value)}/>

            <label>Crop Scientific Name :</label>
            <input type="text" placeholder="Crop Scientific Name"
                   onChange={(e) => props.setCropScientificName(e.target.value)}/>

            <label>Crop Image :</label>
            <input
                type="file"
                id="crop-image"
                name="crop-image"
                accept="image/*"
                onChange={(e) => props.setCropImage(e.target.value)}
                required
            />
            <label>Category :</label>
            <input type="text" placeholder="Crop Category"
                   onChange={(e) => props.setCategory(e.target.value)}/>
            <label>Crop Season :</label>
            <input type="text" placeholder="Crop Season" onChange={(e) => props.setCropSeason(e.target.value)}/>

            <label>Field :</label>
            <select
                onChange={(e) => props.setCropField(e.target.value)}
                required
            >
                <option value="Field 1">Field 1</option>
                <option value="Field 2">Field 2</option>
                <option value="Field 3">Field 3</option>
                <option value="Field 4">Field 4</option>
                <option value="Field 5">Field 5</option>
            </select>

            <br/>
            <button className="button" onClick={props.handleCropSubmit}>{props.children}</button>

        </>
    );
};