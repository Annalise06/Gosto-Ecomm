import React from 'react';

const Heading = ({ title, desc }) => {
  return (
    <>
      <div className=''>
        <h2 className="text-3xl ">{title}</h2>
        <p className='text-gray-400'>{desc}</p>
      </div>
    </>
  );
}

export default Heading;