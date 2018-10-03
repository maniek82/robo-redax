import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              city={robots[i].region}
              age={robots[i].age}
              photo = {robots[i].photo}  
              phone = {robots[i].phone}
              
              />
          );
        })
      }
    </div>
  );
}

export default CardList;