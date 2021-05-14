import React from 'react';
import FooterItems from './FooterItems';
import '../scss/Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="primary_footerMenu">
                <FooterItems item="About"/>
                <FooterItems item="Press & Blog"/>
                <FooterItems item="Copyright"/>
                <FooterItems item="Creator & Partners"/>
                <FooterItems item="Advertisting"/>
                <FooterItems item="Developers"/>
            </div>
            <div className="secondary_footerMenu">
                <FooterItems item="Terms"/>
                <FooterItems item="Privacy"/>
                <FooterItems item="Policy & Safety"/>
                <FooterItems item="Send Feedback"/>
                <FooterItems item="Try Something New"/>
            </div>
            <p className="copyright">Copyright @ 2015 Youtube Inc</p>
        </div>
    )
}

export default Footer
