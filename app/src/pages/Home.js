import React from 'react';
import './Home.css';

import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/page1");
    }
    return (
        <>
            <section className="home mbr-fullscreen">
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-wrap col-12 col-md-8">

                            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                                <strong>ABC 카페에 어서오세요!</strong>
                            </h1>

                            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
                                ABC 카페의 키오스크는 여러분의 얼굴을 캡쳐 후 인식된 연령에 맞춰서 맞춤형
                                인터페이스를 제공합니다.<br /><br />맞춤형 인터페이스를 통해 더 편해진 키오스크의 경험을 제공해드립니다.
                            </p>

                            <div className="mbr-section-btn" onClick={handleClick}>
                                <span className="btn btn-danger display-7">
                                    시작하기
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;