import React from 'react';
import Carditem from '../Carditem/Carditem';

// { active, confirmed, date, deaths, recovered }

const Cards = ({ data: { active, recovered, deaths } }) => {
  console.log(active);

  return (
    <div>
      <Carditem active={active} />
    </div>
  );
};
export default Cards;
