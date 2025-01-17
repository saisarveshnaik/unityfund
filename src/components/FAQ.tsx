import React from 'react';
import '../styles/FAQ.css';
import { useNavigate, Link } from 'react-router-dom';


const FAQ: React.FC = () => {
  return (
    
    <section id="FAQ">
    <div className="cont text-center">
       <h2>Frequently Asked Questions</h2>
       <h1>Popular questions about Blockchain</h1>
       <p>We’ve worked with over 400 companies to build blockchain solutions for their business, and we are still growing.</p>
    </div>
    <div className="cont cont-2">
    
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h3 className="mb-0">
            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            1. What is UnityFund? 
            </button>
          </h3>
        </div>
    
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
          UnityFund is a blockchain-based crowdfunding platform that allows individuals or groups to raise funds for their projects or causes in a transparent and secure manner. It leverages the power of decentralized finance (DeFi) to provide innovative fundraising solutions.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h3 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            2. What is blockchain?                            
            </button>
          </h3>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">
          Blockchain is a decentralized and distributed digital ledger technology that records transactions across multiple computers in a secure and immutable way. It ensures transparency, eliminates the need for intermediaries, and provides tamper-proof records.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h3 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            3. What is crowdfunding?
            </button>
          </h3>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">
          Crowdfunding is a method of raising funds for a project, venture, or cause by collecting small contributions from a large number of people, typically via online platforms. It allows anyone to contribute and support initiatives they believe in.</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingFour">
          <h3 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            4. What are the benefits of crowdfunding on blockchain?                            
            </button>
          </h3>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
          <div className="card-body">
          <ul>
             <li><span>Transparency:</span> Blockchain provides an open ledger of all transactions, ensuring accountability.</li>
             <li><span>Security:</span> Decentralized systems protect against fraud and hacking.</li>
             <li><span>Global Access: </span>Blockchain enables participation from contributors worldwide without traditional banking restrictions.</li>
             <li><span>Reduced Fees: </span>Eliminates intermediaries, reducing transaction and processing costs.</li>
             <li><span>Smart Contracts: </span>Automates fund distribution based on pre-defined rules, ensuring trust and fairness.</li>
          </ul>   
         </div>
          </div>
        </div>
        <div className="card">
        <div className="card-header" id="headingFive">
          <h3 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            5. What blockchain network are we using and why?                            
            </button>
          </h3>
        </div>
        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
          <div className="card-body">
          UnityFund uses the [insert blockchain network] because of its:
          <ul>
             <li>High scalability and transaction speed.</li>
             <li>Low gas fees, making it cost-effective for contributors.</li>
             <li>Strong security measures to protect user data and funds.</li>
             <li>Established ecosystem with extensive developer support.</li>
          </ul>
         </div>
          </div>
        </div>
        <div className="card">
        <div className="card-header" id="headingSix">
          <h3 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            6. How is my investment protected?                            
            </button>
          </h3>
        </div>
        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
          <div className="card-body">
          Your investment is protected through:
          <ul>
             <li><strong>Smart Contracts: </strong>Automated, tamper-proof systems ensure funds are used as intended.</li>
             <li><strong>Escrow Systems: </strong>Funds are held securely until specific milestones are achieved.</li>
             <li><strong>Audits: </strong>Regular audits are conducted to ensure transparency and compliance.</li>
             <li><strong>Blockchain Security: </strong>The decentralized nature of blockchain reduces risks of fraud or manipulation.</li>
          </ul>
          </div>
          </div>
        </div>
        <div className="card">
        <div className="card-header" id="headingSeven">
          <h3 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            7. Is UnityFund audited?                            
            </button>
          </h3>
        </div>
        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
          <div className="card-body">
          Yes, UnityFund undergoes regular independent audits to ensure its smart contracts, security systems, and overall platform integrity meet the highest standards. The audit reports are publicly available for contributors to review.
          </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>


  );
};

export default FAQ;