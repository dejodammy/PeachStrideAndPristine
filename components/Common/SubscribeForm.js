import React, { useState } from 'react';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Store the email address in local storage
        const storedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
        storedEmails.push(email);
        localStorage.setItem('subscribedEmails', JSON.stringify(storedEmails));

        // Clear the input field and mark as subscribed
        setEmail('');
        setSubscribed(true);
    };

    return (
        <div className="subscribe-area ptb-100">
            <div className="container">
                <div className="subscribe-content">
                    <span>Get Started Instantly!</span>
                    <h2>Get Only New Updates from this Newsletter</h2>

                    {subscribed ? (
                        <p>Thank you for subscribing!</p>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="input-newsletter"
                                placeholder="Enter your email"
                                name="EMAIL"
                                value={email}
                                onChange={handleInputChange}
                                required
                            />

                            <button type="submit">Subscribe</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubscribeForm;
