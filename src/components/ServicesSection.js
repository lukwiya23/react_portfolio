import React from 'react'
import styled from  'styled-components'
function ServicesSection() {
    return (
        <Services>
            <Description>
                <h2>High <span>Quality </span>services.</h2>
                <Cards>
                    <Card>
                        <div className="icon"><img src="/images/clock.svg" alt="" />
                        <h3>Efficiency</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon"><img src="/images/teamwork.svg" alt="" />
                        <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon"><img src="/images/diaphragm.svg" alt="" />
                        <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon"><img src="/images/money.svg" alt="" />
                        <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                </Cards>
               
            </Description>
            <Image>
                <img src="/images/home2.png" alt="" />
                </Image>
        </Services>
    )
}

export default ServicesSection

const Services = styled.div`
min-height:90vh;
display:flex;
padding:5rem 5rem;
align-items:center;
justify-content:space-between;
color:white;

h2{
    padding-bottom:5rem;
}
p{
    width:100%;
    padding:2rem 0rem 4rem 0rem;
}
`

const Description = styled.div`
flex:1;
padding-right:5rem;
`
const Image = styled.div``

const Cards = styled.div`
display:flex;
flex-wrap:wrap;
`

const Card = styled.div`
flex-basis:20rem;

.icon{
    display:flex;
    align-items:center;
}
h3{
     margin-left:1rem;
     background:white;
     color:black;
     padding: 1rem;
}
`