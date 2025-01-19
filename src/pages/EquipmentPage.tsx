import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Equipment } from "../Models/Equipment";
import { ModalEquipment } from "../components/ModalEquipment";
import '../Css/common.css';
import {AddEquipment, deleteEquipment, updateEquipment} from "../Slices/EquipmentSlice";

export function EquipmentPage() {
    const equipments = useSelector((state: any) => state.equipments);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    const handleEquipmentSubmit = (newEquipment) => {
        if (selectedEquipment) {
            dispatch(updateEquipment(newEquipment));
        } else {
            dispatch(AddEquipment(newEquipment));
        }
        setShowModal(false);
        setSelectedEquipment(null);
    };

    const handleEditClick = (equipment) => {
        setSelectedEquipment(equipment);
        setShowModal(true);
    };

    const handleDeleteClick = (equipmentId) => {
        dispatch(deleteEquipment(equipmentId));
    };

    if (!Array.isArray(equipments)) {
        return (
            <div className="p-6">
                <h1>Equipment Details</h1>
                <p>No equipment available or data is still loading.</p>
            </div>
        );
    }

    const closePopup = () => {
        if(showModal) {
            setShowModal(false);
        }
    }
    return (
        <div className="p-[5.5rem] text-center" onClick={closePopup}>
            <h1>Equipment Details</h1>
            <button className="add-new-btn" onClick={() => setShowModal(true)}>
                Add Equipment +
            </button>
            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td">Equipment Id</td>
                            <td className="custom-table-td">Equipment Name</td>
                            <td className="custom-table-td">Type</td>
                            <td className="custom-table-td">Status</td>
                            <td className="custom-table-td">Assigned Staff</td>
                            <td className="custom-table-td">Assigned Field</td>
                            <td className="custom-table-td">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {equipments.map((equipment: Equipment) => (
                            <tr key={equipment.equipment_id}>
                                <td className="custom-table-td">{equipment.equipment_id}</td>
                                <td className="custom-table-td">{equipment.name}</td>
                                <td className="custom-table-td">{equipment.type}</td>
                                <td className="custom-table-td">{equipment.status}</td>
                                <td className="custom-table-td">{equipment.staff}</td>
                                <td className="custom-table-td">{equipment.field}</td>
                                <td className="custom-table-td">
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEditClick(equipment)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeleteClick(equipment.equipment_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <ModalEquipment
                    handleEquipmentSubmit={handleEquipmentSubmit}
                    equipmentData={selectedEquipment}
                    setEquipmentData={setSelectedEquipment}
                >
                    {selectedEquipment ? "Edit Equipment" : "Add Equipment"}
                </ModalEquipment>
            )}
        </div>
    );
}
