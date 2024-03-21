import React, { FC } from 'react';
import SideNavBar from '../../Components/SideNavBar/Sidebar';

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