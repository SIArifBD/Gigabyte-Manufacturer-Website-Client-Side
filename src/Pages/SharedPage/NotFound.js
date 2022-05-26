import React from 'react';
import notFound from '../../Assets/404.jpg';

const NotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img className='w-100 h-100' src={notFound} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;