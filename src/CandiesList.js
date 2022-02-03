import React from 'react';
import './App.css';
import CandyItem from './CandyItem';

export default function CandiesList({ candies }) {
  return <div className="candies-list">
    {candies.map((candy, i) => <CandyItem key={`${candy}-${i}`} candy={candy}/>)}
  </div>;
}
