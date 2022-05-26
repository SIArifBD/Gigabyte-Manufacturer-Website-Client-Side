import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [orders, setOrsers] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrsers(data)
                });
        }
    }, [user]);
    const handleRemoveOrder = () => {
    }
    return (
        <div>
            <h2 className='text-center'>My Total Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Customer Name</th>
                            <th>Product</th>
                            <th>Order Quantity</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <th>{order.name}</th>
                                <th>{order.product}</th>
                                <th>{order.orderQty}</th>
                                <th>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction ID: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </th>
                                <td>
                                    <label onClick={() => handleRemoveOrder()} htmlFor="delete-confirm-modal" className='btn btn-xs btn-error'>Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;