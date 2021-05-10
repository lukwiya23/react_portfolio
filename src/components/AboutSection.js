import React from 'react'
import styled from 'styled-components'

function AboutSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                  
                    <Hide>
                        <h2>Your <span>dreams </span>come</h2>
                    </Hide>
                    <div className="hide">
                        <h2>true. </h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas you would like us to bring to life. We have a team of professionals at your disposal.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src="/images/home1.png" alt="" />
            </Image>
            
        </About>
    )
}


const About = styled.div`
min-height:90vh;
display:flex;
padding:5rem 5em;
align-items:center;
justify-content:space-between;
color:white;

`

const Description = styled.div`
flex:1;
padding-right:5rem;
`
const Image = styled.div`
flex:1;
overflow:hidden;

img{
    width:100%;
    height:80vh;
    object-fit:cover;
}
`

const Hide = styled.div`

overflow:hidden;
`
export default AboutSection

