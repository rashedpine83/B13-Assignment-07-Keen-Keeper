import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    return (
        <Link to={`/allFriend/${friend.id}`} className="card bg-base-100 shadow-2xl hover:shadow-xl transition duration-300">

            <figure className="px-10 pt-10 flex justify-center">
                <img src={friend.picture} alt={friend.name} className="rounded-full h-20 w-20 object-cover"/>
            </figure>

            <div className="card-body justify-between text-center">

                <h2 className="card-title text-[#1F2937] text-[20px] flex justify-center">
                    {friend.name}
                </h2>

                <p className="text-sm text-gray-500">
                    {friend.days_since_contact}d ago
                </p>

                
                <div className="flex flex-wrap justify-center gap-2">
                    {
                        friend.tags.map((tag, index) => (
                            <span key={index} className="bg-[#CBFADB] px-2 py-1 rounded-full text-[#244D3F]">
                                {tag}
                            </span>
                        ))
                    }
                </div>

                <div className='flex justify-center items-center mt-3'>

                    {/* Status */}
                    <span className={`flex items-center gap-1 py-1 px-3 rounded-full text-sm font-semibold
                        ${friend.status === 'On-Track'
                        ? 'bg-green-600 text-white'
                        : friend.status === 'Almost-Due'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-red-600 text-white' }`}>
                        {friend.status}
                    </span>
                </div>                            
            </div>
        </Link>
    );
};

export default FriendsCard;