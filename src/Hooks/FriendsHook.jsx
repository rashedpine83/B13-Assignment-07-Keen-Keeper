import React, { useEffect, useState } from 'react';

const FriendsHook = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const feachData = async() => {
            const res = await fetch('/Data.json');
            const jsonData = await res.json()
           

            setFriends(jsonData);
            setLoading(false)
        };
        feachData();
    }, []);

    return {friends, loading}
};

export default FriendsHook;