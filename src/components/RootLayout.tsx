import {Navigation} from "./Navigation";
import {Outlet} from "react-router";
import React from "react";

export function RootLayout() {
    return(
        <>
            <Navigation></Navigation>
            <main>

            </main>
            <Outlet></Outlet>
        </>
    );
}