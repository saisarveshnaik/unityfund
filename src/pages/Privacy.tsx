import React from 'react';
import '../styles/Privacy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {


    return (
        <>
            <Header/>
            <div className='privacy-outer'>
            <div className='cont privacy'>
            <h1>Privacy Policy</h1>
            </div>
            </div>
            <div className='cont privacy-content'>
            <p><strong>Effective Date:</strong> 01st December 2024</p>
    <p>Gaming Panda Studios ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard your information when you visit our gaming website (the "Site"). Please read this Privacy Policy carefully. By using the Site, you consent to the practices described herein.</p>

    <h2>1. Information We Collect</h2>
    <h3>a. Information You Provide</h3>
    <p>We collect personal information that you voluntarily provide when you:</p>
    <ul>
        <li>Submit forms on the Site (e.g., contact forms or registration forms).</li>
        <li>Participate in surveys, contests, or promotions.</li>
        <li>Communicate with us via email or other channels.</li>
    </ul>
    <p>The information may include:</p>
    <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Any other details you provide through forms or communication.</li>
    </ul>

    <h3>b. Information We Collect Automatically</h3>
    <p>When you visit the Site, we may automatically collect certain information using Google Analytics and other tracking technologies. This information may include:</p>
    <ul>
        <li>Your IP address</li>
        <li>Browser type</li>
        <li>Device information</li>
        <li>Pages visited</li>
        <li>Time spent on the Site</li>
        <li>Other usage details</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>We use the information we collect for the following purposes:</p>
    <ul>
        <li>To provide, operate, and maintain the Site.</li>
        <li>To improve your experience and personalize content.</li>
        <li>To analyze usage trends and monitor the Site’s performance.</li>
        <li>To communicate with you regarding updates, promotions, or customer support.</li>
        <li>To comply with legal obligations and enforce our policies.</li>
    </ul>

    <h2>3. Cookies and Tracking Technologies</h2>
    <p>We use cookies and similar tracking technologies to:</p>
    <ul>
        <li>Understand user behavior and preferences.</li>
        <li>Provide essential functionality for the Site.</li>
        <li>Improve the Site’s performance and security.</li>
    </ul>
    <p>You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of the Site.</p>

    <h2>4. Sharing Your Information</h2>
    <p>We do not sell or rent your personal information to third parties. However, we may share your information with:</p>
    <ul>
        <li>Service providers that assist us in operating the Site (e.g., analytics providers like Google Analytics).</li>
        <li>Legal authorities if required by law or to protect our rights.</li>
        <li>In the event of a business transfer (e.g., merger, acquisition, or sale of assets).</li>
    </ul>

    <h2>5. Data Security</h2>
    <p>We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

    <h2>6. Your Rights</h2>
    <p>Depending on your location, you may have the following rights regarding your personal information:</p>
    <ul>
        <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
        <li><strong>Correction:</strong> You can request corrections to inaccurate or incomplete information.</li>
        <li><strong>Deletion:</strong> You can request the deletion of your personal information, subject to legal and contractual obligations.</li>
    </ul>
    <p>To exercise your rights, please contact us at the email address provided below.</p>

    <h2>7. Third-Party Links</h2>
    <p>The Site may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review the privacy policies of third-party sites before providing any information.</p>

    <h2>8. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with the updated "Effective Date."</p>

    <h2>9. Contact Us</h2>
    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
    <p>Gaming Panda Studios<br/>
       Email: [Insert Email Address]<br/>
       Address: [Insert Physical Address], India
    </p>
    <p>By continuing to use the Site, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>

                
            </div>
            <Footer/>
        </>
    );
};

export default Privacy;
