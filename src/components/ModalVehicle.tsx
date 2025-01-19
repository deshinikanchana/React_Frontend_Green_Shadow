import { useState, useEffect } from "react";

export function ModalVehicle({ handleVehicleSubmit, vehicleData, setVehicleData, children }) {
    const [vehicleCode, setVehicleCode] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [vehicleCategory, setVehicleCategory] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [status, setStatus] = useState('');
    const [remarks, setRemarks] = useState('');
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        if (vehicleData) {
            setVehicleCode(vehicleData.vehicle_code);
            setLicenseNumber(vehicleData.license_plate_number);
            setVehicleCategory(vehicleData.vehicle_category);
            setFuelType(vehicleData.fuel_type);
            setStatus(vehicleData.status);
            setRemarks(vehicleData.remarks);
            setStaff(vehicleData.staff);
        }
    }, [vehicleData]);

    const handleSubmit = () => {
        const newVehicle = {
            vehicle_code: vehicleCode,
            license_plate_number: licenseNumber,
            vehicle_category: vehicleCategory,
            fuel_type: fuelType,
            status: status,
            remarks: remarks,
            staff: staff
        };
        handleVehicleSubmit(newVehicle);
    };

    return (
        <div className="modal-container">
            <div className="modal-content">
                <label>Vehicle Code:</label>
                <input type="text" value={vehicleCode} onChange={(e) => setVehicleCode(e.target.value)} />

                <label>License Plate Number:</label>
                <input type="text" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} />

                <label>Vehicle Category:</label>
                <input type="text" value={vehicleCategory} onChange={(e) => setVehicleCategory(e.target.value)} />

                <label>Fuel Type:</label>
                <input type="text" value={fuelType} onChange={(e) => setFuelType(e.target.value)} />

                <label>Status:</label>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />

                <label>Staff:</label>
                <select value={staff} onChange={(e) => setStaff([...e.target.selectedOptions].map(option => option.value))} multiple>
                    <option value="Kasun Perera">Kasun Perera</option>
                    <option value="Saman Jayasinghe">Saman Jayasinghe</option>
                    <option value="Nimali Fernando">Nimali Fernando</option>
                    <option value="Chamil Rajapaksha">Chamil Rajapaksha</option>
                    <option value="Rashmi Wijesinghe">Rashmi Wijesinghe</option>
                </select>

                <label>Remarks:</label>
                <input type="text" value={remarks} onChange={(e) => setRemarks(e.target.value)} />

                <button className="save-btn" onClick={handleSubmit}>{children}</button>
            </div>
        </div>
    );
}
