import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';




const Footer = () => {
    return (
        <div className="footer-main-container">
            <footer className="footer-container">
                <div className="icon-container">
                    <h2>Redes Sociales</h2>
                    <FacebookIcon className="icon-fb"/>
                    <InstagramIcon className="icon-ig"/>
                </div>
            </footer>
        </div>
    )
}

export default Footer

//rrss no llevan a ningún lado