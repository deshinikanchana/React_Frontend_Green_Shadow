import { useState, useEffect } from "react";

export function ModalCrop({ handleCropSubmit, cropData, setCropData, children }) {
    const [cropCode, setCropCode] = useState('');
    const [commonName, setCommonName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [cropImage, setCropImage] = useState('');
    const [category, setCategory] = useState('');
    const [season, setSeason] = useState('');
    const [field, setField] = useState([]);

    // Handle the image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCropImage(reader.result); // Set the image as base64 data URL
            };
            reader.readAsDataURL(file);
        }
    };

    // Update state when cropData changes
    useEffect(() => {
        if (cropData) {
            setCropCode(cropData.crop_code);
            setCommonName(cropData.common_name);
            setScientificName(cropData.scientific_name);
            setCropImage(cropData.crop_img_url || ''); // Set image URL or empty string
            setCategory(cropData.crop_category);
            setSeason(cropData.crop_season);
            setField(cropData.field || []); // Ensure it's an array
        }
    }, [cropData]);

    // Handle form submission
    const handleSubmit = () => {
        const newCrop = {
            crop_code: cropCode,
            common_name: commonName,
            scientific_name: scientificName,
            crop_img_url: cropImage, // Set image URL or base64
            crop_category: category,
            crop_season: season,
            field: field
        };
        handleCropSubmit(newCrop);
    };

    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <label>Crop Code:</label>
                    <input
                        type="text"
                        value={cropCode}
                        onChange={(e) => setCropCode(e.target.value)}
                    />

                    <label>Crop Common Name:</label>
                    <input
                        type="text"
                        value={commonName}
                        onChange={(e) => setCommonName(e.target.value)}
                    />

                    <label>Crop Scientific Name:</label>
                    <input
                        type="text"
                        value={scientificName}
                        onChange={(e) => setScientificName(e.target.value)}
                    />

                    <label>Crop Image:</label>
                    <input type="file" onChange={handleImageChange}/>
                    {cropImage && <img src={cropImage} alt="Uploaded preview"/>}

                    <label>Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <label>Crop Season:</label>
                    <input
                        type="text"
                        value={season}
                        onChange={(e) => setSeason(e.target.value)}
                    />

                    <label>Field :</label>
                    <select
                        value={field}
                        onChange={(e) => setField([...e.target.selectedOptions].map(option => option.value))}
                        required
                    >
                        <option value="Field 1">Field 1</option>
                        <option value="Field 2">Field 2</option>
                        <option value="Field 3">Field 3</option>
                        <option value="Field 4">Field 4</option>
                        <option value="Field 5">Field 5</option>
                    </select>

                    <br/>
                    <button className="save-btn" onClick={handleSubmit}>
                        {children}
                    </button>
                </div>
            </div>
        </>
    );
}
