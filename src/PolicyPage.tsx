// src/PolicyPage.tsx
import React from 'react';

const PolicyPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h1>Privacy Policy for Snake App</h1>
            <p>Effective Date: [Insert Date]</p>

            <section>
                <h2>1. Introduction</h2>
                <p>
                    Welcome to the Snake App! This Privacy Policy explains how we collect, use, and protect your information when you use our app. By using the app, you agree to the terms outlined in this policy.
                </p>
            </section>

            <section>
                <h2>2. Information Collection and Use</h2>
                <p>
                    We collect minimal information to provide a smooth gameplay experience. Information collected may include:
                </p>
                <ul>
                    <li>Usage data to improve game features.</li>
                    <li>Crash logs to enhance app stability.</li>
                    <li>Device type and OS version to ensure compatibility.</li>
                </ul>
                <p>No personal or sensitive information is collected.</p>
            </section>

            <section>
                <h2>3. Data Sharing and Security</h2>
                <p>
                    We do not share your data with third parties. All data collected is used solely to improve the app experience. We implement standard security measures to protect data from unauthorized access.
                </p>
            </section>

            <section>
                <h2>4. Changes to this Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
                </p>
            </section>

            <section>
                <h2>5. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@snakeapp.com">support@snakeapp.com</a>.
                </p>
            </section>

            <footer style={{ marginTop: '20px', textAlign: 'center' }}>
                <p>&copy; {new Date().getFullYear()} Snake App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PolicyPage;
