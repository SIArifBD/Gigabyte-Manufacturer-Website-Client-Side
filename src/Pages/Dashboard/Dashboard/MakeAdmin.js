import React from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = ({ u, index, refetch }) => {
    const { _id, email, role } = u;
    const handleMakeAdmin = () => {
        fetch(`https://still-tundra-79453.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully make an admin`);
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{_id}</th>
            <th>{email}</th>
            <th>{role !== 'admin' && <button className="btn btn-xs" onClick={handleMakeAdmin}>Make Admin</button>}</th>
            <th><button className="btn btn-xs">Remove User</button></th>
        </tr>
    );
};

export default MakeAdmin;