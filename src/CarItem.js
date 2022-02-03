import React from 'react';

export default function CarItem({ car }) {
  return <div>
    <p>{car.model}</p>
    <p>{car.make}</p>
    <p>{car.year}</p>
    <p>{car.color}</p>
  </ div>;
}
