import React from 'react';
import { Star } from 'lucide-react';

const Similar = ({ simPosterPath, onClick }) => {
  return (
    <div className='relative hover:cursor-pointer  w-40 h-60 rounded-xl' onClick={onClick}>
      <img className='rounded-xl' src={`https://image.tmdb.org/t/p/w500${simPosterPath}`} alt="Similar Movie Poster" />
      <div className='w-fit flex items-center absolute text-white bg-transparent top-2 right-2'>
        <Star className='w-3 text-orange-300' />
        <p className='p-1 text-xs'>7.5</p>
      </div>
    </div>
  );
};

export default Similar;
