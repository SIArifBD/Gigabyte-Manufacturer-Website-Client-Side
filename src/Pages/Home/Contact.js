import React from 'react';

const Contact = () => {
    return (
        <div className='bg-accent px-10 py-14 '>
            <div className='text-center pb-14 text-white'>
                <p className='text-3xl font-bold text-primary'>
                    Contact Us
                </p>
                <h1 className='text-5xl'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
            </div>
        </div>
    );
};

export default Contact;