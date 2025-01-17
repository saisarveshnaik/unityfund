import React from 'react';
import '../styles/Footer.css';
import { useNavigate, Link } from 'react-router-dom';



const Header: React.FC = () => {
  return (
    
    <footer>
    
	<img src="/images/feature-glaxy.png" className="bg" />
	
	<div className="cont">
	<div className="row">
		<div className="col-md-4">
		<img src="/images/logo/unityfund_logo.png" className="footer-logo" />
		<p className="info">UnityFund is a next-generation blockchain-powered platform revolutionizing crowdfunding and decentralized finance. Established in 2024, UnityFund is dedicated to empowering individuals and communities to achieve financial growth through innovation and trust in blockchain technology.</p>
		
	    <button className="social-icons"><img src="/images/icons/facebook.png" /></button>
		<button className="social-icons"><img src="/images/icons/twitter.png" /></button>
		<button className="social-icons"><img src="/images/icons/instagram.png" /></button>
		<button className="social-icons"><img src="/images/icons/telegram.png" /></button>

	</div>
		<div className="col-md-4 middle text-center">
			<h2>CONTACT US</h2>
			<p className="contactp">123, Dubai Marina, Dubai, UAE</p>
			<p className="boldp">Call Us: +91-9876543210</p>
			<p className="boldp">info@unityfund.com</p>

			<p className="copyrightp">© 2025 UnityFund. All Rights Reserved.</p>
		</div>
		<div className="col-md-4 right">
			<h2>SIGN UP FOR EMAIL UPDATES</h2>
			<p className="info">Sign up with your email address to receive news and updates</p>
            
			<div className="input-div">
				<input type="email" placeholder="Your Email Address" />
				<button className="sub-btn">Subscribe</button>
			</div>

		</div>
	</div>
	</div>

	</footer>


  );
};

export default Header;