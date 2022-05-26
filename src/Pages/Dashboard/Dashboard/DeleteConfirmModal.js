import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ removeProducts, refetch, setRemoveProducts }) => {
    const { name, description, email } = removeProducts;
    const handleConfirmDelete = () => {
        fetch(`http://localhost:5000/product/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted!!`)
                    setRemoveProducts(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id='delete-confirm-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle'>
                <div className='modal-box'>
                    <h3 className='font-bold text-lg text-red-500'>Are you sure you want to delete ${name}!</h3>
                    <p className='py-4'>{description}</p>
                    <div className='modal-action'>
                        <label onClick={() => handleConfirmDelete()} htmlFor="delete-confirm-modal" className='btn btn-xs btn-error'>Delete</label>
                        <label htmlFor="delete-confirm-modal" className='btn btn-xs'>Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;