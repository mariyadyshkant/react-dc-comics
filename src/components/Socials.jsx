import facebookLogo from "/public/img/footer-facebook.png"
import twitterLogo from "/public/img/footer-twitter.png"
import youtubeLogo from "/public/img/footer-youtube.png"
import pinterestLogo from "/public/img/footer-pinterest.png"
import periscopeLogo from "/public/img/footer-periscope.png"

export default function Socials() {
    return (
        <div className="socials_bar">
            <div className="container socials-container">
                <button className="sign_up" type="button">SIGN-UP NOW!</button>
                <div className="right_side_socials">
                    <span className="follow">FOLLOW US</span>
                    <div className="socials">
                        <a href="#"><img src={facebookLogo} alt="Facebook" /></a>
                        <a href="#"><img src={twitterLogo} alt="Twitter" /></a>
                        <a href="#"><img src={youtubeLogo} alt="YouTube" /></a>
                        <a href="#"><img src={pinterestLogo} alt="Pinterest" /></a>
                        <a href="#"><img src={periscopeLogo} alt="Periscope" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}