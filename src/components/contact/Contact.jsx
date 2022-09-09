import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="./assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <textarea type="text" placeholder="Message" required />
          <button type="submit">Send</button>
          {message && <span>Thanks, I 'll reply as soon as possible.</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;