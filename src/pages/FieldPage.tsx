import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Field } from "../Models/Field";
import { ModalField } from "../components/ModalField";
import '../Css/common.css';
import {AddField, deleteField, updateField} from "../Slices/FieldSlice";

export function FieldPage() {
    const fields = useSelector((state: any) => state.fields);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedField, setSelectedField] = useState(null);

    const handleFieldSubmit = (newField) => {
        if (selectedField) {
            dispatch(updateField(newField));
        } else {
            dispatch(AddField(newField));
        }
        setShowModal(false);
        setSelectedField(null);
    };

    const handleEditClick = (field) => {
        setSelectedField(field);
        setShowModal(true);
    };

    const handleDeleteClick = (fieldCode) => {
        dispatch(deleteField(fieldCode));
    };

    if (!Array.isArray(fields)) {
        return (
            <div className="p-6">
                <h1>Field Details</h1>
                <p>No fields available or data is still loading.</p>
            </div>
        );
    }
    const closePopup = ()=>{
        if(showModal) {
            setShowModal(false);
        }
    }

    return (
        <div className="p-[5.5rem] text-center" onClick={closePopup}>
            <h1>Field Details</h1>
            <button className="add-new-btn" onClick={() => setShowModal(true)}>
                Add Field +
            </button>
            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td">Field Code</td>
                            <td className="custom-table-td">Field Name</td>
                            <td className="custom-table-td">Location</td>
                            <td className="custom-table-td">Size</td>
                            <td className="custom-table-td">Crops</td>
                            <td className="custom-table-td">Staff</td>
                            <td className="custom-table-td">Image 1</td>
                            <td className="custom-table-td">Image 2</td>
                            <td className="custom-table-td">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {fields.map((field: Field) => (
                            <tr key={field.field_code}>
                                <td className="custom-table-td">{field.field_code}</td>
                                <td className="custom-table-td">{field.field_name}</td>
                                <td className="custom-table-td">{field.location}</td>
                                <td className="custom-table-td">{field.size}</td>
                                <td className="custom-table-td">
                                    {field.crops.join(', ')}
                                </td>
                                <td className="custom-table-td">
                                    {field.staff.join(', ')}
                                </td>
                                <td className="custom-table-td">
                                    <img
                                        src={field.image_1_url}
                                        alt={`${field.field_name}'s image`}
                                        className="w-16 h-16 rounded-md"
                                    />
                                </td>
                                <td className="custom-table-td">
                                    <img
                                        src={field.image_2_url}
                                        alt={`${field.field_name}'s image`}
                                        className="w-16 h-16 rounded-md"
                                    />
                                </td>
                                <td className="custom-table-td">
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEditClick(field)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeleteClick(field.field_code)}
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
                <ModalField
                    handleFieldSubmit={handleFieldSubmit}
                    fieldData={selectedField}
                    setFieldData={setSelectedField}
                >
                    {selectedField ? "Edit Field" : "Add Field"}
                </ModalField>
            )}
        </div>
    );
}
