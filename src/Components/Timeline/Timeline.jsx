import React, { useContext, useState } from 'react';
import { addTimelineContext } from '../../Context/Context';

const Timeline = () => {
  const { addTimeline, setAddTimeline } = useContext(addTimelineContext);

  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setAddTimeline(addTimeline.filter((item) => item.id !== id));
  };

  const filteredTimeline = addTimeline.filter((item) => {
    const search = searchTerm.toLowerCase();

    return (
      item.name.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search) ||
      item.date.toLowerCase().includes(search)
    );
  });

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className= {`${filteredTimeline.length === 0 ? 'hidden' : 'text-3xl font-bold mb-6'}`} >Timeline</h1>

     {filteredTimeline.length > 0 && (
      <input
        type="search"
        placeholder="Search by name, type, date..."
        className="border p-3 mb-6 rounded-lg outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
    )};
  
      {filteredTimeline.length === 0 
        ? (<p className="text-center text-gray-500 border border-gray-400 p-4 text-3xl">
          No matching timeline found</p>) 
        : (<div className="space-y-4">
             {filteredTimeline.map((item) => (
              <div key={item.id} className="flex items-center justify-between drop-shadow-2xl p-4 rounded-lg bg-white hover:shadow-xl transition">

                <div className="flex items-center gap-4">
                  <img src={item.image} className="w-10 h-10 object-contain"alt={item.type}/>
                  <div>
                    <p className="font-bold text-lg">{item.type}</p>
                    <p className="text-gray-600 text-sm">With {item.name}</p>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                  </div>
                </div>

                <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 font-medium">
                  Delete
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;