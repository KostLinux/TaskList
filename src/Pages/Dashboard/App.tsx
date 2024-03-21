import React, { FC } from 'react';
import SideNavBar from '../../Components/SideNavBar/Sidebar';
import './App.css';

const Dashboard: FC = () => {
    return (
        <div className="dashboard">
                <SideNavBar />
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome to the Dashboard</p>
                </div>
            </div>
    );
}

export default Dashboard;