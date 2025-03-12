import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Think. Plan. Implement.</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    {/* <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li> */}
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/neel-kunjadiya/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin-square"></i>
                    </a>

                    <a href="https://github.com/Neel-Kunjadiya" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>

                    {/* <a href="https://twitter.com/shivam_0105_" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-twitter"></i>
                    </a> */}
                </div>

                <span className="footer__copy">&#169; Neel Kunjadiya | All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer