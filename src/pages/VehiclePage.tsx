import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Vehicle } from "../Models/Vehicle";
import '../Css/common.css';
import { ModalVehicle } from '../components/ModalVehicle';
import {AddVehicle, DeleteVehicle, UpdateVehicle} from "../Slices/VehicleSlice";

export function VehiclePage() {
    const vehicles = useSelector((state: any) => state.vehicles);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vehicleData, setVehicleData] = useState<Vehicle | null>(null);

    const handleVehicleSubmit = (vehicle: Vehicle) => {
        if (vehicleData) {
            dispatch(UpdateVehicle(vehicle));
        } else {
            dispatch(AddVehicle(vehicle));
        }

        setIsModalOpen(false);
    };

    const handleAddVehicle = () => {
        setVehicleData(null);
        setIsModalOpen(true);
    };

    const handleEditVehicle = (vehicle: Vehicle) => {
        setVehicleData(vehicle);
        setIsModalOpen(true);
    };


    const handleDeleteVehicle = (vehicleCode: string) => {
        dispatch(DeleteVehicle(vehicleCode));
    };

    if (!Array.isArray(vehicles)) {
        return (
            <div className="p-6">
                <h1>Vehicle Details</h1>
                <p>No Vehicles available or data is still loading.</p>
            </div>
        );
    }
    const closePopup = () => {
        if(isModalOpen) {
            setIsModalOpen(false);
        }
    }

    return (
        <div className="p-[5.5rem] text-center" onClick={closePopup}>
            <h1>Vehicles Details</h1>
            <button className="add-new-btn" onClick={handleAddVehicle}>Add Vehicle +</button>

            {isModalOpen && (
                <ModalVehicle
                    handleVehicleSubmit={handleVehicleSubmit}
                    setVehicleData={setVehicleData}
                    vehicleData={vehicleData}
                >
                    {vehicleData ? 'Save Changes' : 'Save Vehicle'}
                </ModalVehicle>
            )}

            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td">Vehicle Code</td>
                            <td className="custom-table-td">License Plate Number</td>
                            <td className="custom-table-td">Category</td>
                            <td className="custom-table-td">Fuel Type</td>
                            <td className="custom-table-td">Status</td>
                            <td className="custom-table-td">Allocated Staff Members</td>
                            <td className="custom-table-td">Remarks</td>
                            <td className="custom-table-td">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicles.map((vehicle: Vehicle) => (
                            <tr key={vehicle.vehicle_code}>
                                <td className="custom-table-td">{vehicle.vehicle_code}</td>
                                <td className="custom-table-td">{vehicle.license_plate_number}</td>
                                <td className="custom-table-td">{vehicle.vehicle_category}</td>
                                <td className="custom-table-td">{vehicle.fuel_type}</td>
                                <td className="custom-table-td">{vehicle.status}</td>
                                <td className="custom-table-td">
                                    {vehicle.staff.map((member, index) => (
                                        <div key={index}>{member}</div>
                                    ))}
                                </td>
                                <td className="custom-table-td">{vehicle.remarks}</td>
                                <td className="custom-table-td">
                                    <button className="edit-btn" onClick={() => handleEditVehicle(vehicle)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDeleteVehicle(vehicle.vehicle_code)}>Delete</button>
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
