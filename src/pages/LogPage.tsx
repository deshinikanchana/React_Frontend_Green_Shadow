import { useDispatch, useSelector } from "react-redux";
import { Monitoring_log } from "../Models/Monitoring_log";
import { useState } from "react";
import { MonitoringLog } from "../components/MonitoringLog";
import '../Css/common.css';
import {AddLog, deleteLog, updateLog} from "../Slices/MonitoringLogSlice";

export function LogPage() {
    const monitoring_logs = useSelector((state: any) => state.monitoring_logs);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [logData, setLogData] = useState<Monitoring_log | null>(null);

    const handleLogSubmit = (log: Monitoring_log) => {
        if (logData) {
            dispatch(updateLog(log));
        } else {
            dispatch(AddLog(log));
        }
        setIsModalOpen(false);
    };

    const handleAddLog = () => {
        setLogData(null);
        setIsModalOpen(true);
    };

    const handleEditLog = (log: Monitoring_log) => {
        setLogData(log);
        setIsModalOpen(true);
    };

    const handleDeleteLog = (logCode: string) => {
        dispatch(deleteLog(logCode));
    };

    if (!Array.isArray(monitoring_logs)) {
        return (
            <div className="p-6">
                <h1>Log Details</h1>
                <p>No logs available or data is still loading.</p>
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
            <h1>Log Details</h1>
            <button className="add-new-btn" onClick={handleAddLog}>Add Log +</button>

            {isModalOpen && (
                <MonitoringLog
                    handleLogSubmit={handleLogSubmit}
                    setLogData={setLogData}
                    logData={logData}
                >
                    {logData ? 'Save Changes' : 'Save Log'}
                </MonitoringLog>
            )}

            <div className="grid grid-cols-2 p-1 space-x-4">
                <div className="col-span-6">
                    <table className="custom-table">
                        <thead className="custom-table-th">
                        <tr>
                            <td className="custom-table-td">Log Code</td>
                            <td className="custom-table-td">Log Date</td>
                            <td className="custom-table-td">Observation</td>
                            <td className="custom-table-td">Observed Image</td>
                            <td className="custom-table-td">Fields</td>
                            <td className="custom-table-td">Crops</td>
                            <td className="custom-table-td">Staff</td>
                            <td className="custom-table-td">Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {monitoring_logs.map((log: Monitoring_log) => (
                            <tr key={log.log_code}>
                                <td className="custom-table-td">{log.log_code}</td>
                                <td className="custom-table-td">{log.log_date}</td>
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
                                <td className="custom-table-td">
                                    <button className="edit-btn" onClick={() => handleEditLog(log)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDeleteLog(log.log_code)}>Delete</button>
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
