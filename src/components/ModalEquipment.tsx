import { useState, useEffect } from "react";

export function ModalEquipment({ handleEquipmentSubmit, equipmentData, setEquipmentData, children }) {
    const [equipmentId, setEquipmentId] = useState('');
    const [equipmentName, setEquipmentName] = useState('');
    const [equipmentType, setEquipmentType] = useState('');
    const [equipmentStatus, setEquipmentStatus] = useState('');
    const [equipmentStaff, setEquipmentStaff] = useState('');
    const [equipmentField, setEquipmentField] = useState('');

    useEffect(() => {
        if (equipmentData) {
            setEquipmentId(equipmentData.equipment_id);
            setEquipmentName(equipmentData.name);
            setEquipmentType(equipmentData.type);
            setEquipmentStatus(equipmentData.status);
            setEquipmentStaff(equipmentData.staff);
            setEquipmentField(equipmentData.field);
        }
    }, [equipmentData]);

    const handleSubmit = () => {
        const newEquipment = {
            equipment_id: equipmentId,
            name: equipmentName,
            type: equipmentType,
            status: equipmentStatus,
            staff: equipmentStaff,
            field: equipmentField
        };
        handleEquipmentSubmit(newEquipment);
    };

    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <label>Equipment Id :</label>
                    <input
                        type="text"
                        value={equipmentId}
                        onChange={(e) => setEquipmentId(e.target.value)}
                    />

                    <label>Equipment Name :</label>
                    <input
                        type="text"
                        value={equipmentName}
                        onChange={(e) => setEquipmentName(e.target.value)}
                    />

                    <label>Equipment Type :</label>
                    <select
                        value={equipmentType}
                        onChange={(e) => setEquipmentType(e.target.value)}
                        required
                    >
                        <option value="Electrical">Electrical</option>
                        <option value="Mechanical">Mechanical</option>
                    </select>

                    <label>Status :</label>
                    <select
                        value={equipmentStatus}
                        onChange={(e) => setEquipmentStatus(e.target.value)}
                        required
                    >
                        <option value="Available">Available</option>
                        <option value="In Use">In Use</option>
                        <option value="Under Maintenance">Under Maintenance</option>
                    </select>

                    <label>Staff :</label>
                    <select
                        value={equipmentStaff}
                        onChange={(e) => setEquipmentStaff(e.target.value)}
                        required
                    >
                        <option value="Kasun Perera">Kasun Perera</option>
                        <option value="Saman Jayasinghe">Saman Jayasinghe</option>
                        <option value="Nimali Fernando">Nimali Fernando</option>
                        <option value="Chamil Rajapaksha">Chamil Rajapaksha</option>
                        <option value="Rashmi Wijesinghe">Rashmi Wijesinghe</option>
                    </select>

                    <label>Field Page :</label>
                    <select
                        value={equipmentField}
                        onChange={(e) => setEquipmentField(e.target.value)}
                        required
                    >
                        <option value="Field 1">Field 1</option>
                        <option value="Field 2">Field 2</option>
                        <option value="Field 3">Field 3</option>
                        <option value="Field 4">Field 4</option>
                        <option value="Field 5">Field 5</option>
                    </select>

                    <br />
                    <button className="save-btn" onClick={handleSubmit}>{children}</button>
                </div>
            </div>
        </>
    );
}
