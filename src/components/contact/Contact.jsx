import { useState } from "react";
import "./contact.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <h1>Contact.</h1>
        <form onSubmit={handleSubmit}>
        
          <textarea placeholder="Type your message here"></textarea>
          <button type="submit">Send</button>
          
        </form>
        <div className = "socials">
        <GitHubIcon/>
        <LinkedInIcon/>
        < FacebookIcon/>
        <MailIcon/>
        </div>
      </div>
      
    </div>
    

  );
}
