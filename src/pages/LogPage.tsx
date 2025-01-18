import {useSelector} from "react-redux";
import {Monitoring_log} from "../Models/Monitoring_log";
import '../Css/common.css'

export function LogPage() {
    const monitoring_logs = useSelector((state: any) => state.monitoring_logs);

    if (!Array.isArray(monitoring_logs)) {
        return (
            <div className="p-6">
                <h1>Log Details</h1>
                <p>No Logs available or data is still loading.</p>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            <h1>Log Details</h1>
            <button className="add-new-btn">Add Log +</button>
            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td ">Log Code</td>
                            <td className="custom-table-td ">Log Date</td>
                            <td className="custom-table-td ">Observation</td>
                            <td className="custom-table-td ">Observed Image</td>
                            <td className="custom-table-td ">Fields</td>
                            <td className="custom-table-td ">Crops</td>
                            <td className="custom-table-td ">Staff</td>
                            <td className="custom-table-td ">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {monitoring_logs.map((log: Monitoring_log) => (
                            <tr key={log.log_code}>
                                <td className="custom-table-td">{log.log_code}</td>
                                <td className="custom-table-td ">{log.log_date}</td>
                                <td className="custom-table-td">{log.observation}</td>
                                <td className="custom-table-td">
                                    <img
                                        src={log.observed_image}
                                        alt={`${log.log_code}'s image`}
                                        className="w-16 h-16 rounded-md"/>
                                </td>
                                <td className="custom-table-td">
                                    {log.fields.map((field, index) => (
                                        <div key={index}>{field}</div>
                                    ))}
                                </td>
                                <td className="custom-table-td">
                                    {log.crops.map((crop, index) => (
                                        <div key={index}>{crop}</div>
                                    ))}
                                </td>
                                <td className="custom-table-td">
                                    {log.staff.map((member, index) => (
                                        <div key={index}>{member}</div>
                                    ))}
                                </td>
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