import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Review = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async data => {
        const review = {
            rating: data.rating,
            description: data.description,
            displayName: user?.displayName,
            image: user?.image,
            email: user?.email
        }
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review added successfully');
                    reset();
                }
                else {
                    toast.error('Failed to add a Review');
                }
            })
    };
    return (
        <div className='my-5'>
            <h2 className='text-2xl text-center text-primary'>Add Review</h2>
            <div className='flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control object-center w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Give Ratings"
                            className="input input-bordered w-full max-w-xs"
                            {...register("rating", {
                                required: {
                                    value: true,
                                    message: 'Rating is required'
                                }
                            })} />
                        <label className="label">
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        </label>
                    </div>
                    <div className="form-control object-center w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Short Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is required'
                                }
                            })} />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>
                    <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Add a Review" />
                </form>
            </div>
        </div>
    );
};

export default Review;