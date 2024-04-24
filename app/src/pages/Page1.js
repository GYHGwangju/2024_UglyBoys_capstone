import React from 'react';
import Gallary1 from '../assets/images/gallery03.jpg';
import Gallary2 from '../assets/images/gallery04.jpg';
import Gallary3 from '../assets/images/gallery05.jpg';
import { useNavigate } from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/page2");
    }

    return (
        <>
            <section className="gallery1 mbr-gallery cid-ua6fbwfUqb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mb-5">
                                <h4 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-5">커피</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row mbr-gallery">
                        <div className="col-12 col-md-6 col-lg-4 item gallery-image active">
                            <div className="item-wrapper mb-3" onClick={handleClick}>
                                <img className="w-100" src={Gallary3} alt='' />
                            </div>
                            <h6 className="mbr-item-subtitle mbr-fonts-style align-center mb-0 mt-3 display-7">아메리카노</h6>
                        </div><div className="col-12 col-md-6 col-lg-4 item gallery-image">
                            <div className="item-wrapper mb-3" onClick={handleClick}>
                                <img className="w-100" src={Gallary1} alt='' />
                            </div>
                            <h6 className="mbr-item-subtitle mbr-fonts-style align-center mb-0 mt-3 display-7">라떼</h6>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item gallery-image">
                            <div className="item-wrapper mb-3" onClick={handleClick}>
                                <img className="w-100" src={Gallary2} alt='' />
                            </div>
                            <h6 className="mbr-item-subtitle mbr-fonts-style align-center mb-0 mt-3 display-7">바닐라라떼</h6>
                        </div>
                    </div>

                </div>
            </section>
            <section className="article13 cid-uah7r0qjLZ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-md-12 col-lg-10" style={{ border: 'none' }}>
                            <div className="card-wrapper">
                                <div className="card-box align-left">
                                    <h4 className="card-title mbr-fonts-style display-2">
                                        <strong>주문 목록</strong></h4>
                                    <p className="mbr-text mbr-fonts-style mt-4 display-7">
                                        주문내용 1<br />주문내용 2<br />주문내용 3<br />
                                    </p>
                                    <div className="mbr-section-btn mt-4"><a className="btn btn-secondary display-4" href="https://mobiri.se">주문</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page1;