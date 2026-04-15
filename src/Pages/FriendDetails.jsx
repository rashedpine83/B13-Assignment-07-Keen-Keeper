import React from 'react';
import { Link, useParams } from 'react-router';
import FriendsHook from '../Hooks/FriendsHook';
import callImage from '../assets/call.png';
import textImage from '../assets/text.png';
import videoImage from '../assets/video.png'
import { PiBellZBold } from 'react-icons/pi';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { RiDeleteBin6Line } from 'react-icons/ri';


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
    <div className="container mx-auto mt-10 grid grid-cols-4 grid-rows-3 gap-3">
                   
      <div className="card bg-base-100 shadow-2xl hover:shadow-xl transition duration-300 grid row-span-2 rounded-lg">
            <figure className=" flex justify-center">
                <img src={expectedFriend.picture} alt={expectedFriend.name} className="rounded-full h-20 w-20"/>
            </figure>
            <div className="text-center space-y-3">
                <h2 className="card-title text-[#1F2937] text-[20px] flex justify-center">
                    {expectedFriend.name}
                </h2>
                <div className='flex justify-center items-center'>
                    <span className={`flex items-center gap-1 py-1 px-3 rounded-full text-sm font-semibold
                        ${expectedFriend.status === 'On-Track'
                        ? 'bg-green-600 text-white'
                        : expectedFriend.status === 'Almost-Due'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-red-600 text-white' }`}>
                        {expectedFriend.status}
                    </span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                    {
                        expectedFriend.tags.map((tag, index) => (
                            <span key={index} className="bg-[#CBFADB] px-2 py-1 rounded-full text-[#244D3F]">
                                {tag}
                            </span>
                        ))
                    }
                </div>
                <p className='text-[#64748B] font-medium'>"{expectedFriend.bio}"</p>
                 <p className='text-[#64748B]'>{expectedFriend.email}</p>                           
            </div>
        </div>
        <div className='shadow-lg p-3 text-center flex flex-col justify-center items-center'>          
            <p className='text-[#244D3F] text-3xl font-semibold'>{expectedFriend.days_since_contact}</p> 
            <p className='text-gray-500 text-lg'>Days Since Contract</p>                             
        </div>
        <div className='shadow-lg p-3 text-center flex flex-col justify-center items-center'>
            <p className='text-[#244D3F] text-3xl font-semibold'>{expectedFriend.goal}</p>
            <p className='text-gray-500 text-lg'>Goal (Days)</p>                             
        </div>
        <div className='shadow-lg p-3 text-center flex flex-col justify-center items-center'>
           <p className='text-[#244D3F] text-3xl font-semibold'>{expectedFriend.next_due_date}</p>
            <p className='text-gray-500 text-lg'>Next Due</p>                            
        </div>
        <div className='shadow-lg p-3 text-center col-span-3 flex justify-between items-center px-6'>
            <div className='text-left'>
                <h2 className='text-[#244D3F] text-lg font-medium mb-3'>Relationship Goal</h2>
                <p className='text-lg'> <span className='text-gray-500'>Conected Every</span> {expectedFriend.days_since_contact} Days</p>
            </div>
            <Link>
                <button className='btn'>Edit</button>
            </Link>                 
        </div>
        <div className='shadow-lg p-3 text-center grid grid-cols-1 grid-rows-1 gap-2'>
            <Link className="shadow-lg p-4 text-center font-medium flex items-center gap-3">
                <PiBellZBold />
                <p>Snooze 2 Weeks</p>
            </Link>                  
            <Link className="shadow-lg p-4 text-center font-medium flex items-center gap-3">
                <HiOutlineArchiveBox />
                <p>Achive</p>
            </Link>                                  
            <Link className="shadow-lg p-4 text-center font-medium text-red-600 flex items-center gap-3">
                <RiDeleteBin6Line />
                <p>Delete</p>
            </Link>                               
        </div>
        <div className='shadow-lg p-3 text-center col-span-3 gap-3'>
            <div className='grid row-span-3 col-span-1 p-3 text-left mb-4'>
                <p className='text-xl font-medium'>Quick Check-in</p>                
            </div>
            <div className='grid grid-cols-3 gap-3 '>
                <Link className="shadow-lg p-4 ">
                    <img src={callImage} alt="call image" className='mx-auto mb-2'/>
                    <p className='text-lg'>Call</p>
                </Link>                  
                <Link className="shadow-lg p-4">
                    <img src={textImage} alt="text image" className='mx-auto mb-2' />
                    <p className='text-lg'>Text</p>
                </Link>                  
                <Link className="shadow-lg p-4">
                    <img src={videoImage} alt="video image" className='mx-auto mb-2'/>
                    <p className='text-lg'>Video</p>
                </Link>                  
            </div>
        </div>
    </div>
  );
};


export default FriendDetails;