import React from 'react';
import './App.css';

export default function CatItem({ cat }) {
  return <div className="cat">
    <p>{cat.name}</p>
    <p>{cat.breed}</p>
    <p>{cat.color}</p>
    <p>{cat.age}</p>
  </div>;
}
