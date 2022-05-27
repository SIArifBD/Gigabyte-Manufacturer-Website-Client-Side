import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPage/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [removeProducts, setRemoveProducts] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://still-tundra-79453.herokuapp.com/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-2xl'>Manages Products: {products.length}</h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Product Image</th>
                            <th>Name</th>
                            <th>Min-Order</th>
                            <th>Available-Qty</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setRemoveProducts={setRemoveProducts}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                removeProducts && <DeleteConfirmModal
                    removeProducts={removeProducts}
                    refetch={refetch}
                    setRemoveProducts={setRemoveProducts}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageProducts;