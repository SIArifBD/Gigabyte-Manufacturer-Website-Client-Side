import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='my-10'>
            <h4 className='text-5xl font-bold text-primary text-center my-12'>Our Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-accent'>
                {
                    products.length > 5 ? products.slice(0, 6).map(product =>
                        <Product
                            key={product._id}
                            product={product}>
                        </Product>)
                        :
                        products.map(product =>
                            <Product
                                key={product._id}
                                product={product}>
                            </Product>)
                }
            </div>
            {/* <Link to='purchase'>
                <button disabled={products.length === 0 ? true : false} className='btn btn-primary mx-auto d-block my-3 text-decoration-none'>Purchase</button>
            </Link> */}
        </div>
    );
};

export default Products;