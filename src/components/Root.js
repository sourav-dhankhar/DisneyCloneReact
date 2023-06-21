import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';


function Root() {
    return (
        <React.Fragment>
            <Header></Header>
            <Outlet></Outlet>
        </React.Fragment>
    )
}

export default Root;