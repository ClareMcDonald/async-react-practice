import React from 'react';
import CarItem from './CarItem';

export default function CarsList({ cars }) {
  return <div>
    {cars.map((car, i) => <CarItem key={`${car}-${i}`} car={car}/>)}
  </div>;
}
