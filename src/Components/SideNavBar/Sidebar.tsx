import React, { FC } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import logo from '/logo.png';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTachometerAlt, faRocket, faListUl, faInfoCircle  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SideNavBar: FC = () => {
    return (
        <div className="sidenav fixed top-0 left-0 h-full bg-slate-800">
            <img src={logo} alt="TaskList Logo" className="block mx-auto w-24 h-20 mt-8 mb-8" />
            <NavLinkObject to="/dashboard" icon={faTachometerAlt}>Dashboard</NavLinkObject>
            <NavLinkObject to="/goals" icon={faRocket}>Goals</NavLinkObject>
            <NavLinkObject to="/tasks" icon={faListUl}>Tasks</NavLinkObject>
            <NavLinkObject to="/tasks" icon={faInfoCircle}>About</NavLinkObject>
        </div>
    );
}

const NavLinkObject: FC<{ to: string, children: React.ReactNode, icon: IconProp }> = ({ to, children, icon }) => {
    const match = useMatch(to);
    return (
        <NavLink to={to} className={`block ml-4 mr-4 text-left py-2.5 px-4 w-64 rounded transition duration-200 text-white ${match ? 'bg-blue-700 hover:text-white' : 'hover:bg-blue-800 hover:text-white'}`}>
            <FontAwesomeIcon icon={icon} className='mr-2' />
            {children}
        </NavLink>
    );
}

export default SideNavBar;