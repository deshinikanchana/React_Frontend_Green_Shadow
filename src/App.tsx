import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import { RootLayout } from './components/RootLayout';
import React from 'react';
import {Provider} from "react-redux";
import {store} from './Store/store'
import {Dashboard} from "./pages/Dashboard";
import {FieldPage} from "./pages/FieldPage";
import {CropPage} from "./pages/CropPage";
import {StaffPage} from "./pages/StaffPage";
import {VehiclePage} from "./pages/VehiclePage";
import {EquipmentPage} from "./pages/EquipmentPage";
import {UserPage} from "./pages/UserPage";
import {LoginPage} from "./pages/login";
import {LogPage} from "./pages/LogPage";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/fields', element : <FieldPage/>},
                { path : '/crops', element : <CropPage/>},
                { path : '/staff', element : <StaffPage/>},
                { path : '/vehicle', element : <VehiclePage/>},
                { path : '/equipment', element : <EquipmentPage/>},
                { path : '/log', element : <LogPage/>},
                { path : '/user', element : <UserPage/>},
                { path : '/logout', element : <LoginPage/>}
            ]
        },
    ])

    return (
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>

    );

}

export default App
