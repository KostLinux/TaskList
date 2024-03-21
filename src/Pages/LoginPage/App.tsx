import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import credentials from '../../credentials.json';
import logo from '/logo.png';
import '../../App.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username === credentials.username && password === credentials.password) {
            setLoginStatus(true);
        } else {
            alert('Invalid Credentials');
        }
    };

    useEffect(() => {
        if (loginStatus) {
            navigate('/dashboard');
        }
    }, [loginStatus, navigate]);

    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-600 bg-opacity-50">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        <img src={logo} alt="TaskList Logo" className="inline-block mr-2 w-1/2 h-auto" />
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm space-y-4">
                        <div className="relative">
                            <FontAwesomeIcon icon={faUser} className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10" />
                            <input id="username" name="username" type="text" value={username} onChange={handleUsernameChange} required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-12" placeholder="Username" />
                        </div>
                        <div className="relative">
                            <FontAwesomeIcon icon={faLock} className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10" />
                            <input id="password" name="password" type="password" value={password} onChange={handlePasswordChange} required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-12" placeholder="Password" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 transition duration-150 ease-in-out hover:scale-105">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                                <span>Sign in</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;