import React from 'react';
import './App.css';
import DogItem from './DogItem';

export default function DogsList({ dogs }) {
  return <div className="dogs-list">Dogs
    {dogs.map((dog, i) => <DogItem key={`${dog}-${i}`} dog={dog}/>)}
  </div>;
}
