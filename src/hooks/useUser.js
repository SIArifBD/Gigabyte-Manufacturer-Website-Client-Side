import { useEffect, useState } from 'react';

const useUser = user => {
    const [notAdmin, setNotAdmin] = useState(true);
    const [notAdminLoading, setNotAdminLoading] = useState(false);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://still-tundra-79453.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setNotAdmin(data.admin);
                    setNotAdminLoading(true);
                })
        }
    }, [user])

    return [notAdmin, notAdminLoading]
};

export default useUser;