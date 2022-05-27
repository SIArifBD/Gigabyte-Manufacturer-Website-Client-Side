import React, { useEffect, useState } from 'react';
import HomeReview from './HomeReview';
import quote from '../../Assets/quote.svg';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://still-tundra-79453.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What Our Customer Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    {
                        reviews.map(review => <HomeReview
                            key={review._id}
                            review={review}
                        >
                        </HomeReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;