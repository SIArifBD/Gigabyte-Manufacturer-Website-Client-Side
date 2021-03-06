import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPage/Loading';
import MakeAdmin from './MakeAdmin';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://still-tundra-79453.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-center'>All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((u, index) => <MakeAdmin key={u._id} u={u} index={index} refetch={refetch}></MakeAdmin>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;