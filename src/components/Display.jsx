import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import Routes and Route
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();  // Correct use of useLocation()
  
  const isAlbum = location.pathname.includes("album");  // Correct method name
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = albumsData[Number(albumId)]?.bgColor || '#121212';  // Handle undefined

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  }, [isAlbum, bgColor]);

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
