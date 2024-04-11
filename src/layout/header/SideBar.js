import { Fragment } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const SideBar = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/nav_contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setShowSubmitMessage(true); // Show submit message
        resetForm();
        setTimeout(() => {
          setShowSubmitMessage(false); // Hide submit message after 3 seconds
        }, 10000);
      } else {
        console.error('Error 1:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Error  2: outside', error);
      // Handle error
    }
  };

  const resetForm = () => {
    setEmail("");
    setName("");
    setMessage("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
    else if (name === "name") {
      setName(value);
    }
  };

  return (
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={message}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
            {/* Submit message */}
            {showSubmitMessage && <p>Form submitted successfully!</p>}
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="https://twitter.com/ManeuverVenture">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            {/* <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a> */}
            <a href="https://www.linkedin.com/company/maneuverventures/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
