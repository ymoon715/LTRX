import React from 'react';
import './Footer.css'

const footer = () => (
    <footer>
        <div className="footer-text">
            <div onClick={()=>window.open("https://www.yelp.com/biz/little-tokyo-pharmacy-los-angeles")} className="footer-icon">
                <i className="fab fa-yelp"></i>
            </div>
        <p>&#9400;Little Tokyo Pharmacy</p>
        <p>Made by Young Moon</p>
        </div>
    </footer>
)

export default footer;