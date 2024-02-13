import { Link } from 'react-router-dom';
import './Footer.css';
import { FaGithub } from "react-icons/fa";
function Footer() {
    return (
        <div 
            style={{marginTop: '10rem'}} 
            className="footer py-3 bg-body-tertiary"
        >
            <div className="container d-flex justify-content-center" >
                <Link className='github'><FaGithub/></Link>
            <span className="text-body-secondary">@ShopCart</span>
            </div>
        </div>
    )
}

export default Footer;