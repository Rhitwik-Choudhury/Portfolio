import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city Guwahati, VIP road</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-555">+91 7099028155</a>
                        </div>
                        <div className="d-flex">
                            <p>rhitwik3@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Skills</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com/profile.php?id=100076438810367"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            {/* <TwitterShareButton
                                url={"https://x.com/Rhitwik003"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <LineShareButton
                                url={"https://www.linkedin.com/in/rhitwik-choudhury-509037226/"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LineShareButton> */}
                            <TwitterShareButton
                                url={"https://x.com/Rhitwik003"}
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/rhitwik-choudhury-509037226/"}
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Rhitwik | All Rights Reserved
                        </p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Footer
