import React, { useEffect, useState } from 'react';
import "./header.css";
import logo from "../assets/tasklogo.png";

const Header = () => {
    // Retrieve the saved theme from local storage or default to "light"
    const savedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(savedTheme);

    useEffect(() => {
        // Update body class
        document.body.classList.remove("light", "medium", "dark", "gradient1", "gradient2", "gradient3");
        document.body.classList.add(theme);

        // Save theme to local storage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <header className="container mt-3 gx-0 bg-white">
                <div className="row gx-0 border shadow-custom">
                    <div className="col-md-6">
                        <div className="logo-container d-flex">
                            <img src={logo} className='img-fluid' alt="Logo" />
                            <span className="logo-name">Taskmate</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="themeSelector">
                            <span 
                                className={`light ${theme === 'light' ? 'activeTheme' : ''}`} 
                                onClick={() => setTheme('light')}>
                            </span>
                            <span 
                                className={`medium ${theme === 'medium' ? 'activeTheme' : ''}`} 
                                onClick={() => setTheme('medium')}>
                            </span>
                            <span 
                                className={`dark ${theme === 'dark' ? 'activeTheme' : ''}`} 
                                onClick={() => setTheme('dark')}>
                            </span>
                            <span 
                                className={`gradient1 ${theme === 'gradient1' ? 'activeTheme' : ''}`} 
                                onClick={() => setTheme('gradient1')}>
                            </span>
                            <span 
                                className={`gradient2 ${theme === 'gradient2' ? 'activeTheme' : ''}`} 
                                onClick={() => setTheme('gradient2')}>
                            </span>
                            <span 
                                className={`gradient3 ${theme === 'gradient3' ? 'activeTheme' : ''}`} 
                                onClick={() => setTheme('gradient3')}>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
