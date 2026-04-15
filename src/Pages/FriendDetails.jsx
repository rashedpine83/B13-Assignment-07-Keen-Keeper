import React from 'react';
import { useParams } from 'react-router';
import FriendsHook from '../Hooks/FriendsHook';

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = FriendsHook();

  if (loading) {
    return <p>Loading...</p>;
  }

  const expectedFriend = friends.find(
    (friend) => String(friend.id) === id
   
  );
  
  return (
    <div className="container mx-auto my-20 grid grid-cols-4 grid-rows-4 gap-3">
                   
      <div className="card bg-base-100 shadow-2xl hover:shadow-xl transition duration-300 grid row-span-2">
            <figure className="px-10 pt-10 flex justify-center">
                <img src={expectedFriend.picture} alt={expectedFriend.name} className="rounded-full h-20 w-20 object-cover"/>
            </figure>
            <div className="card-body justify-between text-center">
                <h2 className="card-title text-[#1F2937] text-[20px] flex justify-center">
                    {expectedFriend.name}
                </h2>
                
                <div className="flex flex-wrap justify-center gap-2">
                    {
                        expectedFriend.tags.map((tag, index) => (
                            <span key={index} className="bg-[#CBFADB] px-2 py-1 rounded-full text-[#244D3F]">
                                {tag}
                            </span>
                        ))
                    }
                </div>
                <div className='flex justify-center items-center mt-3'>
                    <span className={`flex items-center gap-1 py-1 px-3 rounded-full text-sm font-semibold
                        ${expectedFriend.status === 'On-Track'
                        ? 'bg-green-600 text-white'
                        : expectedFriend.status === 'Almost-Due'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-red-600 text-white' }`}>
                        {expectedFriend.status}
                    </span>
                </div>                            
            </div>
        </div>
        <div className='shadow-lg p-7 text-center'>
          <div className="text-sm text-gray-500">
            {expectedFriend.days_since_contact} <p>Days Since Contract</p>
            </div>                  
        </div>
        <div className='shadow-lg p-7 text-center'>
          <div className="text-sm text-gray-500">
            {expectedFriend.goal} <p>Goal (Days)</p>
            </div>                  
        </div>
        <div className='shadow-lg p-7 text-center'>
            <div className="text-sm text-gray-500">
            {expectedFriend.next_due_date} <p>Next Due</p>
            </div>                  
        </div>
        <div className='shadow-lg p-7 text-center col-span-3'>
            <div className="text-sm text-gray-500">
            
            </div>                  
        </div>

    </div>
  );
};


export default FriendDetails;