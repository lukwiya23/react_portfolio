import React from 'react'
import styled from 'styled-components'

function AboutSection() {
    return (
        <About>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                  
                    <div className="hide">
                        <h2>Your <span>dreams </span>come</h2>
                    </div>
                    <div className="hide">
                        <h2>true. </h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas you would like us to bring to life. We have a team of professionals at your disposal.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src="/images/home1.png" alt="" />
            </div>
            
        </About>
    )
}


const About = styled.div`
min-height:90vh;
display:flex;
padding:5rem 10rem;
align-items:center;
justify-content:space-between;
color:white;

`

export default AboutSection

