import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (purchaseId !== undefined) {
            const url = `http://localhost:5000/product/${purchaseId}`;
            fetch(url).then(res => res.json()).then(data => setProduct(data));
        }
    }, [purchaseId]);

    const handleOrder = event => {
        event.preventDefault();
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const orderQty = event.target.orderQty.value;
        console.log(address, phone, orderQty);
    };

    const handleDecrement = () => {

    }
    const handleIncrement = () => {

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary text-2xl">{product.name}</h2>
                            <p><small>Description: {product.description}</small></p>
                            <p>Minimum Order: {product.order} pcs</p>
                            <p>Available Quantity: {product.quantity} pcs</p>
                            <p>Price: ${product.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
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
                                    <h2 className='text-primary text-center font-bold text-2xl'>Order Quantity</h2>
                                    <div className="flex justify-center items-center gap-4 mt-5">
                                        <div className='flex-initial'>
                                            <label className="label">
                                                <button onClick={handleDecrement} className="btn btn-xs">-</button>
                                            </label>
                                        </div>
                                        <div className='flex-initial'>
                                            <input type="text" name='orderQty' placeholder="10" className="input input-bordered input-xs w-14 max-w-xs text-center " />
                                        </div>
                                        <div className='flex-initial'>
                                            <label className="label">
                                                <button onClick={handleIncrement} className="btn btn-xs">+</button>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;