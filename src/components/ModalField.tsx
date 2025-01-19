import { useState, useEffect } from "react";

export function ModalField({ handleFieldSubmit, fieldData, setFieldData, children }) {
    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldLocation, setFieldLocation] = useState('');
    const [fieldSize, setFieldSize] = useState('');
    const [fieldCrops, setFieldCrops] = useState([]);
    const [fieldStaff, setFieldStaff] = useState([]);
    const [fieldImage1, setFieldImage1] = useState('');
    const [fieldImage2, setFieldImage2] = useState('');

    useEffect(() => {
        if (fieldData) {
            setFieldCode(fieldData.field_code);
            setFieldName(fieldData.field_name);
            setFieldLocation(fieldData.location);
            setFieldSize(fieldData.size);
            setFieldCrops(fieldData.crops);
            setFieldStaff(fieldData.staff);
            setFieldImage1(fieldData.image_1_url);
            setFieldImage2(fieldData.image_2_url);
        }
    }, [fieldData]);

    const handleImageChange = (e, imageType) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (imageType === 'image1') {
                    setFieldImage1(reader.result);
                } else if (imageType === 'image2') {
                    setFieldImage2(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const newField = {
            field_code: fieldCode,
            field_name: fieldName,
            location: fieldLocation,
            size: fieldSize,
            crops: fieldCrops,
            staff: fieldStaff,
            image_1_url: fieldImage1,
            image_2_url: fieldImage2
        };
        handleFieldSubmit(newField);
    };

    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <label>Field Code :</label>
                    <input
                        type="text"
                        value={fieldCode}
                        onChange={(e) => setFieldCode(e.target.value)}
                    />

                    <label>Field Name :</label>
                    <input
                        type="text"
                        value={fieldName}
                        onChange={(e) => setFieldName(e.target.value)}
                        required={true}
                    />

                    <label>Field Location :</label>
                    <input
                        type="text"
                        value={fieldLocation}
                        onChange={(e) => setFieldLocation(e.target.value)}
                        required={true}
                    />

                    <label>Field Size :</label>
                    <input
                        type="text"
                        value={fieldSize}
                        onChange={(e) => setFieldSize(e.target.value)}
                    />

                    <label>Crops :</label>
                    <select
                        multiple
                        value={fieldCrops}
                        onChange={(e) => setFieldCrops([...e.target.selectedOptions].map(option => option.value))}
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
                        multiple
                        value={fieldStaff}
                        onChange={(e) => setFieldStaff([...e.target.selectedOptions].map(option => option.value))}
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
                    <input type="file" onChange={(e) => handleImageChange(e, 'image1')}/>
                    {fieldImage1 && <img src={fieldImage1} alt="Uploaded preview"/>}


                    <label>Field Image 2 :</label>
                    <input type="file" onChange={(e) => handleImageChange(e, 'image2')}/>
                    {fieldImage2 && <img src={fieldImage2} alt="Uploaded preview"/>}


                    <br />
                    <button className="save-btn" onClick={handleSubmit}>{children}</button>
                </div>
            </div>
        </>
    );
}
