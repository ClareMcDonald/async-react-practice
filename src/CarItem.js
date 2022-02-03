import React from 'react';
import './App.css';

export default function CarItem({ car }) {
  return <div className="car">
    <p>Model: {car.model}</p>
    <p>Make: {car.make}</p>
    <p>Year: {car.year}</p>
    <p>Color: {car.color}</p>
  </ div>;
}
