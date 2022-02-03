import React from 'react';
import './App.css';

export default function CandyItem({ candy }) {
  return <div className='candy'>
    <p>Name: {candy.name}</p>
    <p>Maker: {candy.maker}</p>
    <p>Year popularized: {candy.yearPopularized}</p>
    <p>Deliciousness Ranking: {candy.deliciousRanking}</p>
  </div>;
}
