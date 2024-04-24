import React, { useEffect } from "react";
import emailjs from "emailjs-com";

// Initialize EmailJS outside the sendMail function to ensure it's initialized only once
emailjs.init("wQdAogLsQvvuVKZbS"); // Replace "YOUR_EMAILJS_USER_ID" with your actual User ID

function sendMail(e) {
  e.preventDefault();

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_igpnwmh"; // Replace with your email service ID
  const templateID = "template_1ji9xih"; // Replace with your email template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Your message is sent successfully");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
    })
    .catch((err) => console.log(err));
}

const EmailComponent = () => {
  return (
    <div>
      <div className="auth-form">
        <div className="auth-form-label">
          <p className="primary-label">Forgot Password</p>
        </div>
        <form onSubmit={sendMail}>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            required
          />
          <textarea
            className="form-control"
            id="message"
            placeholder="Message"
            required
          />
          <input type="submit" className="btn" value="Submit" />
          <br />
        </form>
        <br />
      </div>
    </div>
  );
};

export default EmailComponent;
