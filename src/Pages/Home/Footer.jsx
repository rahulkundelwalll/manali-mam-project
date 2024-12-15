import React from "react";
// Use this CSS file for styling

const ElegantFooter = () => {
  return (
    <section id="footer">
    <footer className="elegant-footer">
      <div className="elegant-footer-content">
        <div className="elegant-contact-info">
          <h3>For accommodation and other queries, contact</h3>
          <p>
            <strong>Ms. Sharu Slathia</strong>,<br />
            Room no: 01-AC-03207, Dean's Block<br />
            IIT Jammu, Jagti, PO Nagrota<br />
            NH-44, Jammu -181 221<br />
            J&K, India
          </p>
        </div>
        <div className="elegant-contact-methods">
          <div className="elegant-method">
            <i className="elegant-icon icon-phone"></i>
            <span>+91-8082489865; +91-7693095503</span>
          </div>
          <div className="elegant-method">
            <i className="elegant-icon icon-globe"></i>
            <a href="https://iitjammu.ac.in/post/iwsmc" target="_blank" rel="noreferrer">
              Visit Website
            </a>
          </div>
          <div className="elegant-method">
            <i className="elegant-icon icon-mail"></i>
            <a href="mailto:iwsmc@iitjammu.ac.in">iwsmc@iitjammu.ac.in</a>
          </div>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default ElegantFooter;
