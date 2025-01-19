import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import '../Css/Dashboard.css';

export function Dashboard() {
    // const financialChartRef = useRef(null);
    // const productionChartRef = useRef(null);

    const RunCharts = () => {
        const now = new Date();
        const currentDate = now.toLocaleDateString();
        const currentTime = now.toLocaleTimeString();

        const dateElement = document.getElementById("Date");
        const timeElement = document.getElementById("time");

        if (dateElement && timeElement) {
            dateElement.innerText = `Date: ${currentDate}`;
            timeElement.innerText = `Time: ${currentTime}`;

            setInterval(() => {
                const updatedTime = new Date().toLocaleTimeString();
                timeElement.innerText = `Time: ${updatedTime}`;
            }, 1000);
        }

        // if (financialChartRef.current) {
        //     financialChartRef.current.destroy();
        // }

        // if (productionChartRef.current) {
        //     productionChartRef.current.destroy();
        // }


        // const financialCtx = document.getElementById("financialChart");
        // if (financialCtx) {
        //     financialChartRef.current = new Chart(financialCtx, {
        //         type: "doughnut",
        //         data: {
        //             labels: ["Achieved (88%)", "Remaining (12%)"],
        //             datasets: [
        //                 {
        //                     data: [88, 12],
        //                     backgroundColor: ["#4caf50", "#ffc107"],
        //                     borderColor: ["#388e3c", "#ffb300"],
        //                     borderWidth: 1,
        //                 },
        //             ],
        //         },
        //         options: {
        //             responsive: true,
        //             plugins: {
        //                 legend: {
        //                     display: true,
        //                     position: "top",
        //                 },
        //             },
        //         },
        //     });
        // }

    //     const productionCtx = document.getElementById("productionChart");
    //     if (productionCtx) {
    //         productionChartRef.current = new Chart(productionCtx, {
    //             type: "bar",
    //             data: {
    //                 labels: [
    //                     "January", "February", "March", "April", "May", "June", "July", "August",
    //                     "September", "October", "November", "December",
    //                 ],
    //                 datasets: [
    //                     {
    //                         label: "Production (kg)",
    //                         data: [
    //                             5738.63, 3306.93, 4607.66, 3769.9, 5776.11, 4651.75, 2645.55, 2254.35,
    //                             1598.65, 4026.42, 1453.76, 5285.64,
    //                         ],
    //                         backgroundColor: "#4caf50",
    //                         borderColor: "#388e3c",
    //                         borderWidth: 1,
    //                     },
    //                 ],
    //             },
    //             options: {
    //                 responsive: true,
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true,
    //                     },
    //                 },
    //             },
    //         });
    //     }
    };


    useEffect(() => {
        RunCharts();

        // return () => {
            // if (financialChartRef.current) {
            //     financialChartRef.current.destroy();
            //     financialChartRef.current = null; // Reset the ref after destroying
            // }
    //         if (productionChartRef.current) {
    //             productionChartRef.current.destroy();
    //             productionChartRef.current = null; // Reset the ref after destroying
    //         }
    //     };
     }, []);

    return (
        <>
            <section className="overflow-scroll h-screen pt-[60px]">
                <div className="flex flex-col justify-center items-center p-5">
                    <div className="flex w-full">
                        <div className="bg-white rounded-lg shadow-lg m-2.5 p-4 flex-1 text-center" style={{flex: '1 1 calc(30% - 40px)'}}>
                            <h3>Air Temperature</h3>
                            <p>40°C</p>
                            <div className="border border-gray-300 rounded-xl inline-block px-2.5 py-1.5 text-white bg-red-500">High</div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg m-2.5 p-4 text-center" style={{flex: '1 1 calc(30% - 40px)'}}>
                            <h3>Water Content</h3>
                            <p>34%</p>
                            <div className="border border-gray-300 rounded-xl inline-block px-2.5 py-1.5 text-white bg-green-500">Good</div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg m-2.5 p-4 text-center" style={{flex: '1 1 calc(30% - 40px)'}}>
                            <h3>pH Value</h3>
                            <p>10%</p>
                            <div className="border border-gray-300 rounded-xl inline-block px-2.5 py-1.5 text-white bg-yellow-500">Base</div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg m-2.5 p-4 text-center" style={{flex: '1 1 calc(30% - 40px)'}}>
                            <h3>Today</h3>
                            <div className="font-sans text-xl flex flex-col gap-2.5 m-6">
                                <label className="font-bold text-black" id="Date"></label>
                                <label className="font-bold text-black" id="time"></label>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[30%,60%] w-full items-center justify-center gap-x-[5%]">
                        <div className="bg-white rounded-lg shadow-lg m-2.5 p-4 text-center" style={{flex: '1 1 calc(30% - 40px)'}}>
                            <div className="mx-auto my-8 text-center max-w-[700px]">
                                <h3>Financial Statistics</h3>
                                <canvas className="w-full" id="financialChart"></canvas>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg m-2.5 p-4 text-center" style={{flex: '1 1 calc(30% - 40px)'}}>
                            <div className="chartbar">
                                <h3>Production Details</h3>
                                <canvas className="w-full" id="productionChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

