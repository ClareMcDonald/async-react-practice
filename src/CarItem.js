import React from 'react';
import './App.css';

export default function CarItem({ car }) {
  return <div className="car">
    <p>{car.model}</p>
    <p>{car.make}</p>
    <p>{car.year}</p>
    <p>{car.color}</p>
  </ div>;
}
