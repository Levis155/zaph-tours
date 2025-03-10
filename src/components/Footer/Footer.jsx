import "./Footer.css"
import {Link} from "react-router-dom"
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-wrapper">
        <footer className='footer'>
            <FooterCol1  />

            <FooterCol2  />

            <FooterCol3 />

            <FooterCol4 />
            
        </footer>

        <div className="copyright">
            <p>&copy; 2025. Built by Levis.</p>
        </div>
    </div>
  )
}

function FooterCol1() {
    return(
        <div className="footer-col">
            <p className="footer-title">Top destinations</p>

            <div className="links-cont">
                <Link>mt. kenya</Link>
                <Link>mt. ruwenzori</Link>
                <Link>coastal region</Link>
                <Link>nairobi national park</Link>
                <Link>tsavo national park</Link>
                <Link>lake nakuru</Link>
            </div>
        </div>
    )
}

function FooterCol2() {
    return(
        <div className="footer-col">
            <p className="footer-title">company</p>

            <div className="links-cont">
                <Link>about us</Link>
                <Link>Faq</Link>
                <Link>contact us</Link>
                <Link>privacy policy</Link>
                <Link>cancellation and refunds policy</Link>
                <Link>amendment policy</Link>
                <Link>payment policy</Link>
                <Link>terms and conditions</Link>
            </div>
        </div>
    )
}

function FooterCol3() {
    return (
        <div className="footer-col">
            <p className="footer-title">Contact us</p>

            <IconAndLabel Icon= {<FaPhoneAlt />} Label='+254720875598' />

            <IconAndLabel Icon= {<FaEnvelope />} Label='quote request form' />

            <SocialLinksGroup />
        </div>
    )
}

function FooterCol4() {
    return(
    <div className="footer-col">
        <p className="footer-title">our offices</p>

        <IconAndLabel Icon= {<FaLocationDot />} Label='Fake towers, fake street' />

        <IconAndLabel Icon= {<FaLocationDot />} Label='fake business center, fake town' />
    </div>
    )
}

function IconAndLabel({Icon, Label}) {
    return(
        <div className="icon-and-label">
            {Icon}
            <Link>{Label}</Link>
        </div>
    )
}

function SocialLinksGroup() {
    return(
        <div className="social-links-group">
            <Link><FaFacebook /></Link>
            <Link><FaXTwitter /></Link>
            <Link><FaYoutube /></Link>
            <Link><FaInstagram /></Link>
        </div>
    )
}


export default Footer
