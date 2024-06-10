import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../store/authSlice';
import { getAuthCookie } from '../utils/cookie';

function MathPage() {
    const [usernames, setUsernames] = useState([]);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchUsernames = async (token) => {
            try {
                const response = await axios.get('http://localhost:8089/usernames', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                });
                console.log('Response from server:', response.data);
                setUsernames(response.data);
            } catch (err) {
                setError(err);
            }
        };

        if (token) {
            fetchUsernames(token);
        } else {
            const tokenFromCookie = getAuthCookie();
            if (tokenFromCookie) {
                dispatch(setToken(tokenFromCookie));
                fetchUsernames(tokenFromCookie);
            }
        }
    }, [token, dispatch]);

    return (
        <div className="App">
            <h1>Usernames</h1>
            {error && <div>Error: {error.message}</div>}
            <ul>
                {usernames.map((username, index) => (
                    <li key={index}>{username}</li>
                ))}
            </ul>
        </div>
    );
}

export default MathPage;
