import { Link, useParams } from 'react-router';
import { useContext } from 'react';
import FriendsHook from '../Hooks/FriendsHook';
import callImage from '../assets/call.png';
import textImage from '../assets/text.png';
import videoImage from '../assets/video.png';
import { PiBellZBold } from 'react-icons/pi';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { addTimelineContext } from '../Context/Context';
import { PacmanLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = FriendsHook();
  const {addTimeline, setAddTimeline } = useContext(addTimelineContext);

  const expectedFriend = friends.find(
    (friend) => String(friend.id) === id
  );

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <PacmanLoader color="#ad46ff" />
      </div>
    );
  }

  const handleAddTimeline = (type, image) => {
    const newItem = {
      id: Date.now(),
      name: expectedFriend.name,
      type,
      image,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
    };

    setAddTimeline([...addTimeline, newItem]);

    toast.success(`${type} to ${expectedFriend.name}`);
  };

 return (
  <div className="container mx-auto mt-10 px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-3">

    {/* FRIEND CARD */}
    <div className="card bg-base-100 shadow-2xl sm:col-span-2 lg:col-span-1 lg:row-span-2 rounded-lg p-5">
      <figure className="flex justify-center">
        <img
          src={expectedFriend.picture}
          alt={expectedFriend.name}
          className="rounded-full h-24 w-24 object-cover"
        />
      </figure>

      <div className="text-center space-y-3 mt-4">
        <h2 className="text-xl font-semibold">
          {expectedFriend.name}
        </h2>

        <div className="flex justify-center">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              expectedFriend.status === 'On-Track'
                ? 'bg-green-600 text-white'
                : expectedFriend.status === 'Almost-Due'
                ? 'bg-yellow-500 text-white'
                : 'bg-red-600 text-white'
            }`}
          >
            {expectedFriend.status}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {expectedFriend.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#CBFADB] px-2 py-1 rounded-full text-[#244D3F]"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-500 italic">
          "{expectedFriend.bio}"
        </p>

        <p className="text-gray-500">
          {expectedFriend.email}
        </p>
      </div>
    </div>

    {/* STATS */}
    <div className="shadow-lg p-3 text-center">
      <p className="text-3xl font-semibold">
        {expectedFriend.days_since_contact}
      </p>
      <p className="text-gray-500">Days Since Contact</p>
    </div>

    <div className="shadow-lg p-3 text-center">
      <p className="text-3xl font-semibold">
        {expectedFriend.goal}
      </p>
      <p className="text-gray-500">Goal (Days)</p>
    </div>

    <div className="shadow-lg p-3 text-center">
      <p className="text-3xl font-semibold">
        {expectedFriend.next_due_date}
      </p>
      <p className="text-gray-500">Next Due</p>
    </div>

    {/* RELATIONSHIP GOAL */}
    <div className="shadow-lg p-3 col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-between items-center gap-3 px-4">
      <div>
        <h2 className="text-lg font-medium mb-2">
          Relationship Goal
        </h2>
        <p>
          <span className="text-gray-500">Connected Every </span>
          {expectedFriend.goal} Days
        </p>
      </div>

      <Link to={`/edit/${id}`}>
        <button className="btn">Edit</button>
      </Link>
    </div>

    {/* ACTIONS */}
    <div className="shadow-lg p-3 space-y-2">

      <div className="shadow p-3 flex items-center gap-3 cursor-pointer">
        <PiBellZBold />
        <p>Snooze 2 Weeks</p>
      </div>

      <div className="shadow p-3 flex items-center gap-3 cursor-pointer">
        <HiOutlineArchiveBox />
        <p>Archive</p>
      </div>

      <div className="shadow p-3 text-red-600 flex items-center gap-3 cursor-pointer">
        <RiDeleteBin6Line />
        <p>Delete</p>
      </div>

    </div>

    {/* QUICK CHECK-IN */}
    <div className="shadow-lg p-3 col-span-1 sm:col-span-2 lg:col-span-3">
      <p className="text-xl font-medium mb-4">
        Quick Check-in
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div
          onClick={() => handleAddTimeline('Call', callImage)}
          className="shadow p-4 text-center cursor-pointer"
        >
          <img src={callImage} className="mx-auto mb-2" />
          <p className="text-lg">Call</p>
        </div>

        <div
          onClick={() => handleAddTimeline('Text', textImage)}
          className="shadow p-4 text-center cursor-pointer"
        >
          <img src={textImage} className="mx-auto mb-2" />
          <p className="text-lg">Text</p>
        </div>

        <div
          onClick={() => handleAddTimeline('Video', videoImage)}
          className="shadow p-4 text-center cursor-pointer"
        >
          <img src={videoImage} className="mx-auto mb-2" />
          <p className="text-lg">Video</p>
        </div>

      </div>
    </div>

  </div>
);
};

export default FriendDetails;