import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from 'styled-components'; // Import styled-components for styling

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black overlay
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Set z-index to ensure it appears above other elements
`;

const PopupCard = styled.div`
  background-color: white;
  padding: 100px; // Increase the padding to increase the size of the popup
  border-radius: 5px;
`;

const ClickButton = styled.button`
  background-color: #008000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const Popup = ({ togglePopup }) => (
  <Overlay>
    <PopupCard>
      <h1 style={{ fontSize: '24px', color: 'green' }}>Form Submitted.</h1><br/>
      <ClickButton onClick={togglePopup}>Close</ClickButton>
    </PopupCard>
  </Overlay>
);


const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  // const [popupMessage, setPopupMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name,
          phone,
          email,
          message,
        }),
      });

      if (response.ok) {
        // setPopupMessage("Submitted successfully!");
        setShowPopup(true);
        resetForm();
        setTimeout(() => {
          setShowPopup(false);
        }, 10000);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const resetForm = () => {
    setEmail("");
    setName("");
    setPhone("");
    setMessage("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Layout footer={5} singleMenu dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Contact"} />
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contact Us</span>
                      <h2>Ready to Work with Us</h2>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      {/* <h5>New York</h5>
                      <p>
                        55 One State Road, 2nd Block New York, United States
                      </p> */}
                      <a className="mailto" href="mailto:support@gmail.com">
                        connect@maneuverventures.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+00012345688">
                        <i className="fas fa-phone" /> +000 (123) 456 88
                      </a>
                    </div>
                  </div>
                  {/* <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>Australia</h5>
                      <p>67 One State Road, 2nd Block Melbourne, Australia</p>
                      <a className="mailto" href="mailto:support@gmail.com">
                        connect@maneuverventures.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+00012345688">
                        <i className="fas fa-phone" /> +000 (123) 456 88
                      </a>
                    </div>
                  </div> */}
                </div>
                <h4>Follow Us</h4>
                <div className="social-style-two pt-15">
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
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  {/* <span className="sub-title mb-15">Message Us</span> */}
                  <h3>Drop Us a Message</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name"><i className="far fa-user" /></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          value={name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone"><i className="far fa-phone" /></label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="Phone"
                          value={phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email"><i className="far fa-envelope" /></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message"><i className="far fa-pencil" /></label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          value={message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                          Message us <i className="far fa-arrow-right" />
                        </button>
                        {/* <div id="msgSubmit" className="hidden" /> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showPopup && <Popup togglePopup={closePopup} />}
    </Layout>
  );
};
export default Contact;
