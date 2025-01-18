import {useSelector} from "react-redux";
import {Crop} from "../Models/Crop";
import '../Css/common.css'

export function CropPage() {
    const crops = useSelector((state: any) => state.crops);

    if (!Array.isArray(crops)) {
        return (
            <div className="p-6">
                <h1>Crop Details</h1>
                <p>No Crops available or data is still loading.</p>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            <h1>Crop Details</h1>
            <button className="add-new-btn">Add Crop +</button>
            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td ">Crop Code</td>
                            <td className="custom-table-td ">Common Name</td>
                            <td className="custom-table-td ">Scientific Name</td>
                            <td className="custom-table-td ">Image</td>
                            <td className="custom-table-td ">Category</td>
                            <td className="custom-table-td ">Season</td>
                            <td className="custom-table-td ">Field</td>
                            <td className="custom-table-td ">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {crops.map((crop: Crop) => (
                            <tr key={crop.crop_code}>
                                <td className="custom-table-td">{crop.crop_code}</td>
                                <td className="custom-table-td ">{crop.common_name}</td>
                                <td className="custom-table-td">{crop.scientific_name}</td>
                                <td className="custom-table-td">
                                    <img
                                        src={crop.crop_img_url}
                                        alt={`${crop.common_name}'s image`}
                                        className="w-16 h-16 rounded-md"/>
                                </td>
                                <td className="custom-table-td">{crop.crop_category}</td>
                                <td className="custom-table-td">{crop.crop_season}</td>
                                <td className="custom-table-td">{crop.field}</td>
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