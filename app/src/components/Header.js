import React from 'react';
import Logo from '../assets/images/mbr.png'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }
    return (
        <div className='menu menu1 custom-header'>

            <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                <div className="container">
                    <div className="navbar-brand" onClick={handleBack}>
                        <span className="navbar-logo">
                            <img src={Logo} alt="Mobirise Website Builder" style={{ height: '3rem' }} />
                        </span>
                        <span className="navbar-caption-wrap">
                            <span className="navbar-caption text-black text-primary display-4" style={{ fontSize: '1.5em' }}>카테고리</span>
                        </span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                            <li className="nav-item">
                                <span className="nav-link link text-info display-4">커피</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link link text-info display-4" aria-expanded="false">논커피</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link link text-info display-4">차</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link link text-info display-4">주스</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link link text-info display-4">디저트</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;