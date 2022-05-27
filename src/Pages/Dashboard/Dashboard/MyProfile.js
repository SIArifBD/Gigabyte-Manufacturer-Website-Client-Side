import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../SharedPage/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const currentUser = user.email;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user/${currentUser}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const imgStorageKey = '39b0b072552c7c6eafdacd8e48c469f6';
    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        console.log(data);
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const updateUser = {
                        displayName: data.displayName,
                        phoneNumber: data.phone,
                        email: data.email,
                        location: data.location,
                        education: data.education,
                        photoURL: image
                    }
                    //send to database
                    fetch(`http://localhost:5000/user/${currentUser}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updateUser)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Your Profile Updated successfully');
                                reset();
                                refetch();
                            }
                            else {
                                toast.error('Failed to Update Your Profile');
                            }
                        })
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <>
                            <figure className="px-10 pt-10">
                                <img src={users?.photoURL} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-primary text-xl">{users?.displayName}</h2>
                                <p>Email: {users?.email}</p>
                                <p>Phone Number: {users?.phoneNumber}</p>
                                <p>Location: {users?.location}</p>
                                <p>Education: {users?.education}</p>
                            </div>
                        </>
                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <div className="card-body">
                            <div className='flex flex-col justify-center items-center'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control object-center w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("displayName", {
                                                required: {
                                                    value: true,
                                                    message: 'displayName is required'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.displayName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.displayName.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control object-center w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: 'Phone is required'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control object-center w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Location"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("location", {
                                                required: {
                                                    value: true,
                                                    message: 'Location is required'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control object-center w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Education</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Education"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("education", {
                                                required: {
                                                    value: true,
                                                    message: 'Education is required'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input
                                            type="file"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("img", {
                                                required: {
                                                    value: true,
                                                    message: 'Image is required'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                                        </label>
                                    </div>
                                    <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Update Profile" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;