import React from 'react';

export default function CandyItem({ candy }) {
  return <div>
    <p>{candy.name}</p>
    <p>{candy.maker}</p>
    <p>{candy.yearPopularized}</p>
    <p>{candy.deliciousRanking}</p>
  </div>;
}
