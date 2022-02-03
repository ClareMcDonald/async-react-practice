import React from 'react';
import './App.css';

export default function CandyItem({ candy }) {
  return <div className='candy'>
    <p>{candy.name}</p>
    <p>{candy.maker}</p>
    <p>{candy.yearPopularized}</p>
    <p>{candy.deliciousRanking}</p>
  </div>;
}
