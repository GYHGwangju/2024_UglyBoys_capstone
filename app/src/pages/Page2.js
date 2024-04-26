import React from 'react';

const Page2 = () => {
    return (
        <div className='page2'>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-12 content-head">
                        <div className="mbr-section-head mb-5">
                            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>옵션 선택</strong></h4>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb active">
                        <div className="item-wrapper">
                            <div className="item-head">
                                <h5 className="item-title mbr-fonts-style mb-0 display-5"><strong>온도?</strong></h5>
                            </div>
                            <div className="item-content">
                                <p className="mbr-text mbr-fonts-style display-7">음료의 온도를 결정합니다.</p>
                                <div className="mb-4">
                                </div>
                                <div className="temp-check">
                                    <input className="temp-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="temp-check-label" htmlFor="flexRadioDefault1">
                                        뜨거움 (Hot)
                                    </label>
                                </div>
                                <div className="temp-check">
                                    <input className="temp-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="temp-check-label" htmlFor="flexRadioDefault2">
                                        차가움 (Cold)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div><div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                        <div className="item-wrapper">
                            <div className="item-head">
                                <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                    <strong>샷?</strong></h5>
                            </div>
                            <div className="item-content">
                                <p className="mbr-text mbr-fonts-style display-7">
                                    음료에 들어갈 샷의<br />양을 정합니다.</p>
                                <div className="mb-4">
                                </div>
                                <label htmlFor="customRange2" className="form-label">샷의 양을 정합니다. (최소 0, 최대 5까지) </label>
                                <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                            </div>

                        </div>
                    </div>

                    <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                        <div className="item-wrapper">
                            <div className="item-head">
                                <h5 className="item-title mbr-fonts-style mb-0 display-5">테이크 아웃?</h5>
                            </div>
                            <div className="item-content">
                                <p className="mbr-text mbr-fonts-style display-7">
                                    음료를 가져가서 드실 건가요?</p>
                                <div className="mb-4"></div>
                                <div className="takeout-check">
                                    <input className="takeout-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="takeout-check-label" htmlFor="flexRadioDefault1">
                                        매장 이용
                                    </label>
                                </div>
                                <div className="takeout-check">
                                    <input className="takeout-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="takeout-check-label" htmlFor="flexRadioDefault2">
                                        To-go
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mbr-section-btn item-footer">
                    <span className="btn item-btn btn-primary display-7">확정</span>
                </div>
            </div>
        </div>
    );
};

export default Page2;