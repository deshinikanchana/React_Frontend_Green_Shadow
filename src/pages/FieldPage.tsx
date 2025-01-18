import { useSelector } from "react-redux";
import { Field } from "../Models/Field";
import '../Css/common.css'

export function FieldPage() {
    const fields = useSelector((state: any) => state.fields);

    if (!Array.isArray(fields)) {
        return (
            <div className="p-6">
                <h1>Field Details</h1>
                <p>No fields available or data is still loading.</p>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            <h1>Field Details</h1>
            <button className="add-new-btn">Add Field +</button>
            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td ">Field Code</td>
                            <td className="custom-table-td ">Field Name</td>
                            <td className="custom-table-td ">Location</td>
                            <td className="custom-table-td ">Size</td>
                            <td className="custom-table-td ">Crops</td>
                            <td className="custom-table-td ">Staff</td>
                            <td className="custom-table-td ">Image 1</td>
                            <td className="custom-table-td ">Image 2</td>
                            <td className="custom-table-td ">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {fields.map((field: Field) => (
                            <tr key={field.field_code}>
                                <td className="custom-table-td">{field.field_code}</td>
                                <td className="custom-table-td ">{field.field_name}</td>
                                <td className="custom-table-td">{field.location}</td>
                                <td className="custom-table-td">{field.size}</td>
                                <td className="custom-table-td">
                                    {field.crops.map((crop, index) => (
                                        <div key={index}>{crop}</div>
                                    ))}
                                </td>
                                <td className="custom-table-td">
                                    {field.staff.map((member, index) => (
                                        <div key={index}>{member}</div>
                                    ))}
                                </td>
                                <td className="custom-table-td">
                                    <img
                                        src={field.image_1_url}
                                        alt={`${field.field_name}'s image`}
                                        className="w-16 h-16 rounded-md"/></td>
                                <td className="custom-table-td"><img
                                    src={field.image_2_url}
                                    alt={`${field.field_name}'s image`}
                                    className="w-16 h-16 rounded-md"/></td>
                                <td className="custom-table-td">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

