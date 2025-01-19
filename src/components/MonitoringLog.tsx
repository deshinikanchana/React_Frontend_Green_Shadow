import { useState, useEffect } from "react";

export function MonitoringLog({ handleLogSubmit, logData, setLogData, children }) {
    const [logCode, setLogCode] = useState('');
    const [logDate, setLogDate] = useState('');
    const [observation, setObservation] = useState('');
    const [observedImage, setObservedImage] = useState('');
    const [logField, setLogField] = useState([]);
    const [logCrop, setLogCrop] = useState([]);
    const [logStaff, setLogStaff] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setObservedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (logData) {
            setLogCode(logData.log_code);
            setLogDate(logData.log_date);
            setObservation(logData.observation);
            setObservedImage(logData.observed_image || '');
            setLogField(logData.fields || []);
            setLogCrop(logData.crops || []);
            setLogStaff(logData.staff || []);
        }
    }, [logData]);

    const handleSubmit = () => {
        const newLog = {
            log_code: logCode,
            log_date: logDate,
            observation: observation,
            observed_image: observedImage,
            fields: logField,
            crops: logCrop,
            staff: logStaff
        };
        handleLogSubmit(newLog);
    };

    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <label>Log Code:</label>
                    <input
                        type="text"
                        value={logCode}
                        onChange={(e) => setLogCode(e.target.value)}
                        readOnly={!!logData}
                    />

                    <label>Log Date:</label>
                    <input
                        type="text"
                        value={logDate}
                        onChange={(e) => setLogDate(e.target.value)}
                    />

                    <label>Observation:</label>
                    <input
                        type="text"
                        value={observation}
                        onChange={(e) => setObservation(e.target.value)}
                    />

                    <label>Observation Image:</label>
                    <input
                        type="file"
                        onChange={handleImageChange}/>
                    {observedImage && <img src={observedImage} alt="Uploaded preview"/>}
                    <label>Field Page:</label>
                    <select
                        multiple={true}
                        value={logField}
                        onChange={(e) => setLogField([...e.target.selectedOptions].map(option => option.value))}
                    >
                        <option value="Field 1">Field 1</option>
                        <option value="Field 2">Field 2</option>
                        <option value="Field 3">Field 3</option>
                        <option value="Field 4">Field 4</option>
                        <option value="Field 5">Field 5</option>
                    </select>

                    <label>Crop:</label>
                    <select
                        multiple={true}
                        value={logCrop}
                        onChange={(e) => setLogCrop([...e.target.selectedOptions].map(option => option.value))}
                    >
                        <option value="Wheat">Wheat</option>
                        <option value="Corn">Corn</option>
                        <option value="Rice">Rice</option>
                        <option value="Soybean">Soybean</option>
                        <option value="Barley">Barley</option>
                        <option value="Oats">Oats</option>
                    </select>

                    <label>Staff:</label>
                    <select
                        multiple={true}
                        value={logStaff}
                        onChange={(e) => setLogStaff([...e.target.selectedOptions].map(option => option.value))}
                    >
                        <option value="Kasun Perera">Kasun Perera</option>
                        <option value="Saman Jayasinghe">Saman Jayasinghe</option>
                        <option value="Nimali Fernando">Nimali Fernando</option>
                        <option value="Chamil Rajapaksha">Chamil Rajapaksha</option>
                        <option value="Rashmi Wijesinghe">Rashmi Wijesinghe</option>
                    </select>

                    <br />
                    <button className="save-btn" onClick={handleSubmit}>
                        {children}
                    </button>
                </div>
            </div>
        </>
    );
}
