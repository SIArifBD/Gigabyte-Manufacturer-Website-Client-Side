import React from 'react';

const MyProfile = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product?.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary text-2xl">{product?.name}</h2>
                            <p><small>Description: {product?.description}</small></p>
                            <p>Minimum Order: {product?.order} pcs</p>
                            <p>Available Quantity: {product?.quantity} pcs</p>
                            <p>Price: ${product?.price}</p>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleOrder}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" disabled value={user?.displayName || ''} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" disabled value={user?.email || ''} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" name='phone' placeholder="phone" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Order Quantity</span>
                                    </label>
                                    <input type="text" name='orderQty' placeholder="Minimum order 10" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                                </div>
                            </form>
                            {/* <form onSubmit={handleOrder}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" disabled value={user?.displayName || ''} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" disabled value={user?.email || ''} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" name='phone' placeholder="phone" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Order Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Min Order Qty"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("orderQty", {
                                            required: {
                                                value: true,
                                                message: 'Order Quantity is Required'
                                            },
                                            minLength: {
                                                value: 10,
                                                message: 'You can order minimum 10pcs'
                                            },
                                            maxLength: {
                                                value: 500,
                                                message: 'You can order maximum 500pcs'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.orderQty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQty.message}</span>}
                                        {errors.orderQty?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.orderQty.message}</span>}
                                        {errors.orderQty?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.orderQty.message}</span>}
                                    </label>
                                </div>
                                <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Login" />
                            </form> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;