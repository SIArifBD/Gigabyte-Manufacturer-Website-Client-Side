import React from 'react';

const HomeReview = ({ review }) => {
    const { rating, photoURL, description, displayName, email } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className='flex items-center my-3'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={photoURL} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{displayName}</h4>
                    <p>{email}</p>
                    <h4 className='text-xl'>Ratings: {rating}</h4>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;