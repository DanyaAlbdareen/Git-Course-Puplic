import React from 'react'
import './FooterJobDetails.css'
import linkedInimg from '../../../../Images/linkedin-icon.png'
import websiteImg from '../../../../Images/website-logo.png'

function FooterJobDetails() {
    return (
        <>
         <footer>
            <div className="container1">
                <div className="follows">
                  <h3>Follows Us <br/><span>Engage With Us</span></h3>
                  
                </div>
            </div>
            <div className="container2">
                <div className="icons">
                <img id="imageLinked" src={linkedInimg}/>
                <img id="imageWebsite" src={websiteImg}/>

                </div>

            </div>
       </footer>
        </>
    )
}

export default FooterJobDetails
