import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Blockchain Crowdfunding</h1>
            <p>Secure and transparent crowdfunding for your projects.</p>
            <Link to="/projects">View Projects</Link>
        </div>
    );
};

export default Home;
