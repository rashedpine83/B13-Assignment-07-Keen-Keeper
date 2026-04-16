import { Link, useParams } from 'react-router';
import FriendsHook from '../Hooks/FriendsHook';
import callImage from '../assets/call.png';
import textImage from '../assets/text.png';
import videoImage from '../assets/video.png';
import { PiBellZBold } from 'react-icons/pi';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { addTimelineContext } from '../Context/Context';
import { useContext } from 'react';
import { PacmanLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = FriendsHook();
  const { addTimeline, setAddTimeline } = useContext(addTimelineContext);

  const expectedFriend = friends.find((friend) => String(friend.id) === id);

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <PacmanLoader color="#ad46ff" />
      </div>
    );
  }

  if (!expectedFriend) {
    return <p className="text-center mt-10">Friend not found</p>;
  }

  const handleAddTimeline = (type, image) => {
    const newTimeline = {
      id: Date.now(),
      friendId: expectedFriend.id,
      name: expectedFriend.name,
      type,
      image,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    setAddTimeline([...addTimeline, newTimeline]);
    toast.success(`${type} added to timeline`);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      {/* Profile Card */}
      <div className="shadow-2xl rounded-lg p-5 md:col-span-2 lg:col-span-1 text-center">
        <img
          src={expectedFriend.picture}
          alt={expectedFriend.name}
          className="mx-auto rounded-full h-20 w-20 md:h-24 md:w-24 object-cover"
        />

        <h2 className="text-lg md:text-xl font-semibold mt-4">
          {expectedFriend.name}
        </h2>

        <span className={`px-3 py-1 rounded-full text-sm font-semibold inline-block mt-2
          ${expectedFriend.status === 'On-Track'
            ? 'bg-green-600 text-white'
            : expectedFriend.status === 'Almost-Due'
            ? 'bg-yellow-500 text-white'
            : 'bg-red-600 text-white'}`}>
          {expectedFriend.status}
        </span>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {expectedFriend.tags?.map((tag, index) => (
            <span key={index} className="bg-[#CBFADB] px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-500 italic mt-3 text-sm md:text-base">
          "{expectedFriend.bio}"
        </p>

        <p className="text-gray-500 text-sm break-all mt-2">
          {expectedFriend.email}
        </p>
      </div>

      {/* Stats */}
      {[ 
        { label: "Days Since Contact", value: expectedFriend.days_since_contact },
        { label: "Goal (Days)", value: expectedFriend.goal },
        { label: "Next Due", value: expectedFriend.next_due_date }
      ].map((item, i) => (
        <div key={i} className="shadow-lg p-4 text-center flex flex-col justify-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#244D3F]">
            {item.value}
          </p>
          <p className="text-gray-500 text-sm md:text-lg">
            {item.label}
          </p>
        </div>
      ))}

      {/* Relationship Goal */}
      <div className="shadow-lg p-4 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-medium mb-2 text-[#244D3F]">
            Relationship Goal
          </h2>
          <p className="text-sm md:text-lg">
            <span className="text-gray-500">Connected Every</span> {expectedFriend.goal} Days
          </p>
        </div>

        <Link to={`/edit/${id}`}>
          <button className="btn w-full md:w-auto">Edit</button>
        </Link>
      </div>

      {/* Actions */}
      <div className="shadow-lg p-4 space-y-2">
        <div className="flex items-center gap-3 cursor-pointer">
          <PiBellZBold />
          <p>Snooze 2 Weeks</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <HiOutlineArchiveBox />
          <p>Archive</p>
        </div>

        <div className="flex items-center gap-3 text-red-600 cursor-pointer">
          <RiDeleteBin6Line />
          <p>Delete</p>
        </div>
      </div>

      {/* Quick Check-in */}
      <div className="shadow-lg p-4 md:col-span-2 lg:col-span-3">
        <p className="text-lg md:text-xl font-medium mb-4">
          Quick Check-in
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            onClick={() => handleAddTimeline('Call', callImage)}
            className="shadow p-4 text-center cursor-pointer">
            <img src={callImage} className="mx-auto w-8 h-8 md:w-10 md:h-10" />
            <p>Call</p>
          </div>

          <div
            onClick={() => handleAddTimeline('Text', textImage)}
            className="shadow p-4 text-center cursor-pointer">
            <img src={textImage} className="mx-auto w-8 h-8 md:w-10 md:h-10" />
            <p>Text</p>
          </div>

          <div
            onClick={() => handleAddTimeline('Video', videoImage)}
            className="shadow p-4 text-center cursor-pointer">
            <img src={videoImage} className="mx-auto w-8 h-8 md:w-10 md:h-10" />
            <p>Video</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FriendDetails;