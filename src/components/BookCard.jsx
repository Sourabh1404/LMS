import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 shadow-xl rounded-xl">
      <article className="overflow-hidden rounded-lg">
        <header className="items-center justify-between leading-none p-2 md:p-4">
          <Link to={`/book/${book.id}`} className="flex justify-center items-center no-underline hover:underline text-black">
            <img alt="Placeholder" className="flex justify-center items-center rounded-md shadow-lg shadow-[#000] w-[50%] h-[50%]" src={book.imageLink} />
          </Link>
        </header>
        <div className='flex flex-col m-2 p-2 '>
          <p className="flex justify-center items-center mb-4 ml-2 text-2xl font-bold font-mono">
            {book.title}
          </p>
          <p className='text-md mb-3'><span className='text-gray-500 font-mono flex justify-center items-center text-left text-xl '>Author: {book.author}</span></p>
          <p className='text-md mb-3'><span className='text-gray-500 font-mono flex justify-center items-center text-left text-xl '>Year: {book.year}</span></p>
          <p className='text-md mb-3'><span className='text-gray-500 font-mono flex justify-center items-center text-left text-xl '>Genre: {book.genre} </span></p>
        </div>
      </article>
    </div>
  );
};

export default BookCard;
