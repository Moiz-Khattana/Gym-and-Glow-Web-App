import React, { useState } from "react";
import Sidebar from "../Dashboard/Components/SideBar Section/Sidebar";
import "../../App.css"; // Ensure styles are correctly imported

const SupportFeedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <div className="supportsPage">
      <Sidebar />
      <div className="supportsContainer">
        <h2 className="supportsHeader">Support & Feedback</h2>

        {/* Language Support Section */}
        <div className="supportCard">
          <h3>Language Support</h3>
          <select className="supportsDropdown">
            <option>English</option>
            <option>Urdu</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>

        {/* FAQ Section */}
        <div className="supportCard">
          <h3>Frequently Asked Questions</h3>
          <div className="faqItem">
            <strong>How do I register a business?</strong>
            <p>You can register by clicking on 'Add Business' in your profile.</p>
          </div>
          <div className="faqItem">
            <strong>How do I book an appointment?</strong>
            <p>Navigate to the business page and select 'Book Now'.</p>
          </div>
          <div className="faqItem">
            <strong>How can I contact support?</strong>
            <p>You can reach us via email at <a href="mailto:support@gymglow.com">support@gymglow.com</a>.</p>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="supportCard">
          <h3>Feedback</h3>
          <form onSubmit={handleFeedbackSubmit} className="feedbackForm">
            <textarea
              className="supportsInput"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience..."
            ></textarea>
            <button type="submit" className="btnSupport">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportFeedback;
