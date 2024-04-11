import { useState } from "react";
import Layout from "@/src/layout/Layout";
import { useRouter } from "next/router";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState(""); // State to capture the additional comments

  const router = useRouter();

  const handleUnsubscribe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/unsubscribed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          email,
          comments,
        }),
      });

    //   if (response.ok) {
    //     // Store email in local storage
    //     localStorage.setItem('unsubscribe_email', email);
    //     // Redirect to subscription successful page
    //     router.push(`/UnsubscribeSuccessful`);
    //   } else {
    //     console.error('Error:', response.statusText);
    //     // Handle error
    //   }
    // } catch (error) {
    //   console.error('Error: outside', error);
    //   // Handle error
    // }

      if (response.ok) {
        // Redirect to subscription successful page with email query parameter
        router.push(`/UnsubscribeSuccessful?email=${encodeURIComponent(email)}`);
      } else {
        console.error('Error:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Error: outside', error);
      // Handle error
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "comments") {
      setComments(value);
    }
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
                      name="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="additional-comments mb-20">
                    <label htmlFor="comments">Additional comments (optional):</label>
                    <textarea id="comments" name="comments" rows="4" cols="50" value={comments} onChange={handleChange}></textarea>
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
