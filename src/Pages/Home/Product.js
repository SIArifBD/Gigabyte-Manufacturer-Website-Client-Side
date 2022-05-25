import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, quantity, order, price } = product;
    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card lg:max-w-lg bg-base-00 shadow-2xl">
            <div className="card-body text-center">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-white items-center text-center">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p><small>Description: {description}</small></p>
                    <p>Minimum Order: {order} pcs</p>
                    <p>Available Quantity: {quantity} pcs</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;