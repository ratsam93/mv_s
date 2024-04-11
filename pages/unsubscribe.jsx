import { useState } from "react";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleUnsubscribe = (event) => {
    event.preventDefault();
    // Code to handle unsubscribe logic goes here
    console.log("Unsubscribe logic goes here...");
    
    // Redirect to subscription successful page with email query parameter
    router.push(`/UnsubscribeSuccessful?email=${encodeURIComponent(email)}`);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Layout footer={5} singleMenu dark>
      <section
        className="error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-30 rmb-35">
                  <h2>We're sorry to see you go!</h2>
                </div>
                <form onSubmit={handleUnsubscribe}>
                  <div className="mb-20">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="unsubscribe-reason mb-20">
                    <h3>Why are you unsubscribing?</h3>
                    <ul>
                      <li>
                        <input type="checkbox" id="tooManyEmails" />
                        <label htmlFor="tooManyEmails">Too many emails</label>
                      </li>
                      <li>
                        <input type="checkbox" id="notRelevant" />
                        <label htmlFor="notRelevant">Content not relevant</label>
                      </li>
                      <li>
                        <input type="checkbox" id="foundWhatLookingFor" />
                        <label htmlFor="foundWhatLookingFor">Found what I was looking for</label>
                      </li>
                      <li>
                        <input type="checkbox" id="otherReason" />
                        <label htmlFor="otherReason">Other (please specify)</label>
                        <input type="text" id="otherReasonText" placeholder="Specify reason" />
                      </li>
                    </ul>
                  </div>
                  <div className="additional-comments mb-20">
                    <label htmlFor="comments">Additional comments (optional):</label>
                    <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                  </div>
                  <button type="submit" className="theme-btn style-two">
                    Unsubscribe <i className="far fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-image wow zoomIn delay-0-2s">
                <img
                  src="assets/images/background/Unsubscribe.png"
                  alt="Unsubscribe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Unsubscribe;
