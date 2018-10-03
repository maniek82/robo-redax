import React from 'react';

const Card = ({ name, email, id, city, photo,age, phone }) => {
  return (
    <div style={{width: "25%"}} className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${email}?size=100x100`} />
      <div>
        <h4 >Name: {name}</h4>
        <p> {email}</p>
        <p> Tel: {phone}</p>
        <p>Country: {city}</p>
        <p>Age: {age}</p>
        <img alt='photo' src={`${photo}`} />
      </div>
    </div>
  );
}

export default Card;
