import React from 'react';

const SongItem = ({ name, image, desc, id }) => {  // Capitalize component name
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text text-sm'>{desc}</p> {/* Add desc if needed */}
    </div>
  );
}

export default SongItem;  // Capitalize export name
