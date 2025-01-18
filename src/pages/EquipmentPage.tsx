import {useSelector} from "react-redux";
import {Equipment} from "../Models/Equipment";
import '../Css/common.css'

export function EquipmentPage() {
    const equipments = useSelector((state: any) => state.equipments);

    if (!Array.isArray(equipments)) {
        return (
            <div className="p-6">
                <h1>Equipments Details</h1>
                <p>No Equipments available or data is still loading.</p>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            <h1>Equipments Details</h1>
            <button className="add-new-btn">Add Equipment +</button>
            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td ">Equipment Id</td>
                            <td className="custom-table-td ">Equipment Name</td>
                            <td className="custom-table-td ">Type</td>
                            <td className="custom-table-td ">Status</td>
                            <td className="custom-table-td ">Assigned Staff</td>
                            <td className="custom-table-td ">Assigned Field</td>
                            <td className="custom-table-td ">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {equipments.map((equipment: Equipment) => (
                            <tr key={equipment.equipment_id}>
                                <td className="custom-table-td">{equipment.equipment_id}</td>
                                <td className="custom-table-td ">{equipment.name}</td>
                                <td className="custom-table-td">{equipment.type}</td>
                                <td className="custom-table-td">{equipment.status}</td>
                                <td className="custom-table-td">{equipment.staff}</td>
                                <td className="custom-table-td">{equipment.field}</td>
                                <td className="custom-table-td"><button className="edit-btn">Edit</button> <button className="delete-btn">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}