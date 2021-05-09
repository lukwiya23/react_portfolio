import React from 'react'

function ServicesSection() {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>Quality</span>services.</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon"><img src="/images/clock.svg" alt="" />
                        <h3>Efficiency</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae explicabo commodi numquam sed, officiis doloribus dignissimos mollitia deleniti facere?</p>
                    </div>
                    <div className="card">
                        <div className="icon"><img src="/images/teamwork.svg" alt="" />
                        <h3>Teamwork</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae explicabo commodi numquam sed, officiis doloribus dignissimos mollitia deleniti facere?</p>
                    </div>
                    <div className="card">
                        <div className="icon"><img src="/images/diaphragm.svg" alt="" />
                        <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae explicabo commodi numquam sed, officiis doloribus dignissimos mollitia deleniti facere?</p>
                    </div>
                    <div className="card">
                        <div className="icon"><img src="/images/money.svg" alt="" />
                        <h3>Affordable</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae explicabo commodi numquam sed, officiis doloribus dignissimos mollitia deleniti facere?</p>
                    </div>
                </div>
                <img src="/images/home2.png" alt="" />
            </div>
        </div>
    )
}

export default ServicesSection
