import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const UnsubscribeSuccessful = () => {
    const router = useRouter();
    const email = router.query.email || "";

    const handleResubscribe = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/re_subscribed', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    timestamp: new Date().toISOString(),
                    email,
                }),
            });

            if (response.ok) {
                // Redirect to subscription successful page with email query parameter
                router.push(`SubscriptionSuccessful`);
            } else {
                console.error('Error:', response.statusText);
                // Handle error
            }
        } catch (error) {
            console.error('Error: outside', error);
            // Handle error
        }
    };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     if (name === "email") {
    //         setEmail(value);
    //     } else if (name === "comments") {
    //         setComments(value);
    //     }
    // };
    return (
        <Layout footer={5} singleMenu dark>
            <section className="error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1 d-flex align-items-center justify-content-center">
                <div className="container container-1290">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="error-content text-center">
                                <div className="section-title mb-30 rmb-35">
                                    <h2>Unsubscribe Successful</h2>
                                </div>
                                <p>You have been successfully unsubscribed from email communications. If you did this in error, you may re-subscribe by clicking the button below.</p>
                                <form onSubmit={handleResubscribe}>
                                    <div className="mb-20">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            defaultValue={email}
                                            required
                                            hidden
                                        />
                                    </div>
                                    <button type="submit" className="theme-btn style-two">
                                        Re-subscribe <i className="far fa-arrow-right" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    );
};

export default UnsubscribeSuccessful;
