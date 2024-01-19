import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
    return (
        <div className='footer'>
            <footer>
                <div className="media-icons">
                    <a href=""><FaLinkedinIn /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaFacebook /></a>
                    <a href=""><FaGithub /></a>
                </div>
                <ul class="copyright"><li>© Copyright 2021 Nordic Giant</li><li>Design by <a title="Styleshout" href="http://www.styleshout.com/"> Styleshout</a></li></ul>
            </footer>
        </div>

    )
}

export default Footer
