import Layout from "@/src/layout/Layout";
import Link from "next/link";

const SubscriptionSuccessful = () => {

  return (
    <Layout footer={5} singleMenu dark>
      <section className="error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1 d-flex align-items-center justify-content-center">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="error-content text-center">
                <div className="section-title mb-30 rmb-35">
                  <h2>Subscription Successful</h2>
                </div>
                <p>Thank you for subscribing to our email communications. You'll now receive updates and exclusive offers straight to your inbox.</p>
                <Link legacyBehavior href="/">
                  <a className="theme-btn style-two">
                    Continue <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubscriptionSuccessful;
