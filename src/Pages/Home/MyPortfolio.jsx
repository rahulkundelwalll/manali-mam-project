import React from "react";
// import "./EventDetails.css";

const MyPortfolio = () => {
  return (
    <div className="event-details">
      <header className="event-header">
        <h1>Event Registration & Committees</h1>
        <p>Join us for an engaging and insightful event!</p>
      </header>

      <div className="attendees-section card">
        <h2>Who Should Attend?</h2>
        <ul>
          <li>Academicians and Students</li>
          <li>Admixture Manufacturers</li>
          <li>Builders/Contractors/Site Supervisors</li>
          <li>Cement Manufacturers</li>
          <li>Construction Companies</li>
          <li>Government Agencies/Officials</li>
          <li>Practicing Engineers/Consultants/Architects</li>
          <li>Manufacturers/RMC Professionals</li>
          <li>Project Management Consultants</li>
        </ul>
      </div>

      <div className="registration-section card">
        <h2>For Registration</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Registration Fees (including 18% GST)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indian Delegates</td>
              <td>₹4720</td>
            </tr>
            <tr>
              <td>Foreign Delegates</td>
              <td>USD 236</td>
            </tr>
            <tr>
              <td>Students</td>
              <td>₹4130</td>
            </tr>
          </tbody>
        </table>
        <p className="note">
          *Fee includes a registration kit, lunch, and workshop dinner on 15th
          February 2025.
        </p>
      </div>

      <div className="payment-section card">
        <h2>Mode of Payment: Online</h2>
        <p>
          <strong>Beneficiary:</strong> Indian Institute of Technology Jammu
        </p>
        <p>
          <strong>Branch:</strong> ICICI, Jagti, Jammu
        </p>
        <p>
          <strong>Account Number:</strong> 02600103416
        </p>
        <p>
          <strong>IFSC Code:</strong> ICIC0001759
        </p>
        <p>
          <strong>MICR Code:</strong> 180229016
        </p>
        <div className="qr-section">
          <img
            src="path/to/qr-code.png"
            alt="QR Code for Payment"
            className="qr-code"
          />
          <a
            href="https://eazypay.icicibank.com/eazypaylink"
            className="payment-link"
          >
            Click here to pay
          </a>
        </div>
      </div>

      <div className="committee-section">
        <div className="organising-committee card">
          <h2>Organising Committee</h2>
          <ul>
            <li>
              <strong>Patron:</strong> Prof. Manoj Singh Gaur, Director, IIT
              Jammu
            </li>
            <li>
              <strong>Chairperson:</strong> Prof. Anurag Misra, IIT Jammu
            </li>
            <li>
              <strong>Organising Secretaries:</strong> Dr. Ankit Kathuria, IIT
              Jammu
            </li>
            <li>
              <strong>MEMBERS:</strong> Er. Anirudh Mathur, ICI-GC Member
              Er. H. R. Girish, ICI-GC Member,
              Dr. Mir Faizan Ul Haq, IIT Jammu,
              Dr. Rimen Jamatia, IIT Jammu,
              Dr. SivaKumar G, IIT Jammu,
              Dr. Shiva S, IIT Jammu,
              Mr. Vikrant Jamwal, Founder TecCon Solutions
            </li>
            <li>
              <strong>STUDENT COORDINATORS:</strong> Mr. Lalit Singh, Ms. Manali Rathee,
              Mr. Muzafar Ahmad Ganie, Mr. Sumit Singh Thakur, Rahul Kumar
              
            </li>
          </ul>
        </div>

        <div className="technical-committee card">
          <h2>Technical Committee</h2>
          <ul>
            <li>Prof. A. Murali Krishna, IIT Tirupati</li>
            <li>Prof. C.D. Modhera, SVNIT Surat</li>
            <li>Dr. Jayamadhuri Kolleboyina, IIT Jammu</li>
            <li>Prof. Kaushik Bandyopadhyay, Jadavpur University</li>
            <li>Er. Manoj Kawalkar, ICI President Elect.</li>
            <li>Dr. Parameshwar N. Hiremath, NIT Srinagar</li>
            <li>Dr. Pawan Kalla, MNIT Jaipur</li>
            <li>Dr. Pervaiz Fathima Khatoon M, IIT Jammu</li>
            <li>Dr. Ramesh Nayaka, IIT Dharwad</li>
            <li>Dr. Sameer K. Sarma Pachalla, IIT Jammu</li>
            <li>Dr. Teo Wee, Heriot Watt University, Malaysia</li>
            <li>Dr. V. Ramachandra, President ICI</li>
            <li>Dr. Venkat M, SCECON</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
