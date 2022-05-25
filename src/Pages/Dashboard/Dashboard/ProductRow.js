import React from 'react';

const ProductRow = ({ product, index, setDeletingProduct }) => {
    const { name, description, img, order, quantity, price } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className='avatar'>
                    <div className='w-8 rounded'>
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{order}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className='btn btn-xs btn-error'>Delete</label>

            </td>
        </tr>
    );
};

export default ProductRow;