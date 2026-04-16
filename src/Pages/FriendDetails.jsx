
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
    return (<h2 className='flex justify-center'><PacmanLoader color='#ad46ff' /></h2>);
  };

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
    <div className="container mx-auto mt-10 grid grid-cols-4 grid-rows-3 gap-3">

      <div className="card bg-base-100 shadow-2xl hover:shadow-xl transition duration-300 row-span-2 rounded-lg p-5">
        <figure className="flex justify-center">
          <img src={expectedFriend.picture} alt={expectedFriend.name} className="rounded-full h-24 w-24 object-cover"/>
        </figure>

        <div className="text-center space-y-3 mt-4">
          <h2 className="text-[#1F2937] text-xl font-semibold">
            {expectedFriend.name}
          </h2>

          <div className="flex justify-center">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${expectedFriend.status === 'On-Track'
                  ? 'bg-green-600 text-white'
                  : expectedFriend.status === 'Almost-Due'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-red-600 text-white'}`}>
                    {expectedFriend.status}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {expectedFriend.tags.map((tag, index) => (<span key={index} className="bg-[#CBFADB] px-2 py-1 rounded-full text-[#244D3F]">
                {tag}
              </span>))}
          </div>

          <p className="text-[#64748B] italic">
            "{expectedFriend.bio}"
          </p>

          <p className="text-[#64748B]">
            {expectedFriend.email}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="shadow-lg p-3 flex flex-col justify-center items-center text-center">
        <p className="text-[#244D3F] text-3xl font-semibold">
          {expectedFriend.days_since_contact}
        </p>
        <p className="text-gray-500 text-lg">
          Days Since Contact
        </p>
      </div>

      <div className="shadow-lg p-3 flex flex-col justify-center items-center text-center">
        <p className="text-[#244D3F] text-3xl font-semibold">
          {expectedFriend.goal}
        </p>
        <p className="text-gray-500 text-lg">
          Goal (Days)
        </p>
      </div>

      <div className="shadow-lg p-3 flex flex-col justify-center items-center text-center">
        <p className="text-[#244D3F] text-3xl font-semibold">
          {expectedFriend.next_due_date}
        </p>
        <p className="text-gray-500 text-lg">
          Next Due
        </p>
      </div>

      {/* Relationship Goal */}
      <div className="shadow-lg p-3 col-span-3 flex justify-between items-center px-6">
        <div>
          <h2 className="text-[#244D3F] text-lg font-medium mb-2">
            Relationship Goal
          </h2>
          <p className="text-lg">
            <span className="text-gray-500">
              Connected Every
            </span>{' '}
            {expectedFriend.goal} Days
          </p>
        </div>

        <Link to={`/edit/${id}`}>
          <button className="btn">Edit</button>
        </Link>
      </div>

      {/* Actions */}
      <div className="shadow-lg p-3 space-y-2">
        <Link className="shadow p-3 flex items-center gap-3">
          <PiBellZBold />
          <p>Snooze 2 Weeks</p>
        </Link>

        <Link className="shadow p-3 flex items-center gap-3">
          <HiOutlineArchiveBox />
          <p>Archive</p>
        </Link>

        <Link className="shadow p-3 text-red-600 flex items-center gap-3">
          <RiDeleteBin6Line />
          <p>Delete</p>
        </Link>
      </div>

      {/* Quick Check-in */}
      <div className="shadow-lg p-3 col-span-3">
        <p className="text-xl font-medium mb-4">Quick Check-in</p>

        <div className="grid grid-cols-3 gap-6">
          <div
            onClick={() => handleAddTimeline('Call', callImage)}
            className="shadow p-4 text-center cursor-pointer"
          >
            <img src={callImage} className="mx-auto w-10 h-10" />
            <p>Call</p>
          </div>

          <div
            onClick={() => handleAddTimeline('Text', textImage)}
            className="shadow p-4 text-center cursor-pointer"
          >
            <img src={textImage} className="mx-auto w-10 h-10" />
            <p>Text</p>
          </div>

          <div
            onClick={() => handleAddTimeline('Video', videoImage)}
            className="shadow p-4 text-center cursor-pointer"
          >
            <img src={videoImage} className="mx-auto w-10 h-10" />
            <p>Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;


