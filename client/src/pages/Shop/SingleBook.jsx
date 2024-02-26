import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, imageURL } = useLoaderData();

  return (
    <div className=' mt-24 px-4 lg:px-24'>
      <img src={imageURL} alt="image" className=' h-96'/>
      <h2>{bookTitle}</h2>
    </div>
  );
};
// 2.56.00
export default SingleBook;
