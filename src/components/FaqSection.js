import React from 'react'
import styled from 'styled-components'
import {About} from '../pages/AboutUs'

function FaqSection() {
    return (
       <Faq>
           <h2>Any questions <span>FAQ</span></h2>
           <div className="question">
               <h4>How do I start?</h4>
               <div className="answer">
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos voluptate, error repudiandae libero voluptas?</p>
               </div>
               <div className="faq-line"></div>
           </div>
           <div className="question">
               <h4>Daily Schedule</h4>
               <div className="answer">
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos voluptate, error repudiandae libero voluptas?</p>
               </div>
               <div className="faq-line"></div>
           </div>
           <div className="question">
               <h4>Payment Methods</h4>
               <div className="answer">
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos voluptate, error repudiandae libero voluptas?</p>
               </div>
               <div className="faq-line"></div>
           </div>
           <div className="question">
               <h4>Products Offered</h4>
               <div className="answer">
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos voluptate, error repudiandae libero voluptas?</p>
               </div>
               <div className="faq-line"></div>
           </div>
       </Faq>
    )
}

export default FaqSection

const Faq = styled.div`
min-height:90vh;
display:block;
padding:5rem 2rem;
align-items:center;
justify-content:space-between;
color:white;
span{
    display:block;
}
h2{
    padding-bottom:2rem;
    font-weight:lighter;
}
h4{
    font-size:2rem;
}
.faq-line{
    background:#cccccc;
    height:0.2rem;
    margin:2rem 0rem;
    width:100%;
}
.question{
    padding:3rem 0rem;

}
.answer{
    padding:1rem 0rem;
}
p{
    font-size:1rem;
}
`