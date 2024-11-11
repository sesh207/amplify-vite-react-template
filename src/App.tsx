import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PolicyPage from './PolicyPage';


const HomePage: React.FC = () => (
    <div>
        <h1>Welcome to the Snake App!</h1>
        <p>This is the homepage for the Snake app.</p>
    </div>
);

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Default route for root */}
                <Route path="/policy" element={<PolicyPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
