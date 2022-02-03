import React from 'react';
import './App.css';
import CarItem from './CarItem';

export default function CarsList({ cars }) {
  return <div className="cars-list">
    {cars.map((car, i) => <CarItem key={`${car}-${i}`} car={car}/>)}
  </div>;
}
