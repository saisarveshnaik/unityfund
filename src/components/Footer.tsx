import React from 'react';
import '../styles/Footer.css';
import logo from '../images/footer_logo.png';
import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
import x from '../images/x.svg';
import linkedin from '../images/linkedin.svg';


const Header: React.FC = () => {
  return (
    
    <footer>
        <div className='cont'>
            <div className='row'>
                <div className='col-md-6'>
                <img src={logo} className="footer-logo" alt="fooer-logo" />
                <p>A leading game development outsourcing studio whose expertise spans domains such as Unity, Unreal, Al,
                AR/VR, Concept art, 3D modeling, animation, etc</p>
                </div>
                <div className='col-md-2 col-6'>
                    <h2>Product</h2>
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className='col-md-2 col-6'>
                <h2>Services</h2>
                    <ul>
                        <li>Game Development</li>
                        <li>Gaming Art</li>
                        <li>VR/XR Simulation</li>
                        <li>Metaverse</li>
                    </ul>
                </div>
                <div className='col-md-2 col-12'>
                <h2>Legal</h2>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Condotions</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
            
            <hr/>
            <h2>© 2024 Gaming Panda Studios. All rights reserved.</h2>
            
            <div className='btn-div'>
            <button><img src={instagram} className="social-icon" alt="instagram" /></button>
            <button><img src={facebook} className="social-icon" alt="instagram" /></button>
            <button><img src={x} className="social-icon" alt="instagram" /></button>
            <button><img src={linkedin} className="social-icon" alt="instagram" /></button>
            </div>

        </div>
    </footer>

  );
};

export default Header;