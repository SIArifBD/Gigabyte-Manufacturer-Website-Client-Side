import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='text-center'>
            <h2 className='text-5xl font-bold text-primary text-center my-12'>Millions Business Trust Us</h2>
            <div className='w-full'>
                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-figure text-purple-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">We Served</div>
                        <div className="stat-value text-purple-700">100+</div>
                        <div className="stat-desc">Customers</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Annual Revenue</div>
                        <div className="stat-value text-blue-700">120M+</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value text-green-700">33K+</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-orange-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Feedback</div>
                        <div className="stat-value text-orange-700">432+</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;