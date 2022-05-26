import React from 'react';
import aboutBanner from '../../Assets/aboutBanner.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={aboutBanner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">That which
                        resonates with your life</h1>
                    <p className="py-6">“Upgrade Your Life” is the core essence in everything we do at GIGABYTE. We believe only technology made for you will speak to you. With a keen understanding of your needs, we have raised industry standards with game-changing DualBIOS™ technology; our patented Ultra Durable™ motherboards are designed to last and outlast, and our superior Windforce Stack 3x Cooling System exceeds all expectations.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;