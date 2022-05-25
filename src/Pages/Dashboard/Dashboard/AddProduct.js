import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

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
                    const product = {
                        name: data.name,
                        description: data.description,
                        order: data.order,
                        quantity: data.quantity,
                        price: data.price,
                        img: image
                    }
                    //send to database
                    fetch('http://localhost:5000/product', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add a Product');
                            }
                        })
                }
            })
    };
    return (
        <div className='my-5'>
            <h2 className='text-2xl text-center text-primary'>Add a New Product</h2>
            <div className='flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control object-center w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
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
                    <div className="form-control object-center w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Minimum Order Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("order", {
                                required: {
                                    value: true,
                                    message: 'Min-Quantity is required'
                                }
                            })} />
                        <label className="label">
                            {errors.order?.type === 'required' && <span className="label-text-alt text-red-500">{errors.order.message}</span>}
                        </label>
                    </div>
                    <div className="form-control object-center w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is required'
                                }
                            })} />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control object-center w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is required'
                                }
                            })} />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
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
                    <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Add a New Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;