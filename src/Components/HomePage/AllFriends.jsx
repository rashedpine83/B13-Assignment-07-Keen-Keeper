import React from 'react';
import FriendsHook from '../../Hooks/FriendsHook';
import { PacmanLoader } from 'react-spinners';
import FriendsCard from './FriendsCard';

const AllFriends = () => {
    const {friends, loading} = FriendsHook();
    

    return (
        <div>
            <div className='border-t border-gray-200 my-10 container mx-auto'></div>
            <div className='container mx-auto'>
                <h2 className='text-2xl font-semibold mb-10'>Your Friends..</h2>
            </div>
            {
                loading ? (
                    <div className='flex justify-center items-center h-40'>
                        <PacmanLoader color='#ad46ff' />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 container mx-auto'>
                        {
                            friends.map((friend) => (
                                <FriendsCard key={friend.id} friend={friend} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default AllFriends;