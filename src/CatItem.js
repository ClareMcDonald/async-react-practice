import React from 'react';
import './App.css';

export default function CatItem({ cat }) {
  return <div className="cat">
    <p>Name: {cat.name}</p>
    <p>Breed: {cat.breed}</p>
    <p>Color: {cat.color}</p>
    <p>Age: {cat.age}</p>
  </div>;
}
