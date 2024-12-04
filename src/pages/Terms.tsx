import React from 'react';
import '../styles/Terms.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms: React.FC = () => {


    return (
        <>
            <Header/>
            <div className='privacy-outer'>
            <div className='cont privacy'>
            <h1>Terms & Conditions</h1>
            </div>
            </div>
            <div className='cont privacy-content'>
                
            <p>
        <strong>Effective Date:</strong> [Insert Date]
      </p>
      <p>
        Welcome to Gaming Panda Studios! These Terms and Conditions ("Terms") govern your access to and use of our
        website and services ("Services"). By using our Services, you agree to comply with these Terms. Please read
        them carefully. If you do not agree, you must discontinue using our Services.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our Services, you confirm that you are at least 18 years of age or have the consent of a
        parent or legal guardian to use our Services. Your continued use of the Services constitutes your acceptance of
        these Terms.
      </p>

      <h2>2. User Accounts</h2>
      <ul>
        <li>
          <strong>Account Registration:</strong> To access certain features, you may need to create an account. You
          agree to provide accurate, current, and complete information during registration.
        </li>
        <li>
          <strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your account.
        </li>
        <li>
          <strong>Termination of Accounts:</strong> We reserve the right to suspend or terminate your account if we
          believe you have violated these Terms or any applicable law.
        </li>
      </ul>

      <h2>3. User Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Services for any unlawful or fraudulent purposes.</li>
        <li>Post, share, or upload content that is offensive, abusive, or violates any third-party rights.</li>
        <li>Interfere with the functionality of our website or Services.</li>
        <li>Attempt to gain unauthorized access to our systems or user data.</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <ul>
        <li>
          All content, including but not limited to text, graphics, logos, and software, on the Gaming Panda Studios
          website is the property of Gaming Panda Studios or its licensors.
        </li>
        <li>
          You are granted a limited, non-exclusive, and revocable license to use our Services for personal,
          non-commercial purposes. Any unauthorized use is prohibited.
        </li>
      </ul>

      <h2>5. Third-Party Links and Services</h2>
      <p>
        Our website may contain links to third-party websites or services. Gaming Panda Studios is not responsible for
        the content, policies, or practices of third parties. Access these at your own risk.
      </p>

      <h2>6. Limitation of Liability</h2>
      <ul>
        <li>
          To the fullest extent permitted by law, Gaming Panda Studios shall not be liable for any indirect, incidental,
          or consequential damages arising from your use of the Services.
        </li>
        <li>
          Any loss or corruption of data, loss of profits, or damage to devices resulting from your use of the Services.
        </li>
      </ul>

      <h2>7. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Gaming Panda Studios, its employees, and affiliates from any claims,
        damages, or expenses arising from your use of the Services or violation of these Terms.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. Any changes will be effective upon posting on our website. It is
        your responsibility to review these Terms periodically. Continued use of the Services constitutes acceptance of
        the revised Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes arising out of these Terms shall be subject to the
        exclusive jurisdiction of the courts in [Your City, India].
      </p>

      <h2>10. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>Email: [Insert Contact Email]</li>
        <li>Address: Gaming Panda Studios, [Insert Address], India</li>
      </ul>

                
            </div>
            <Footer/>
        </>
    );
};

export default Terms;
