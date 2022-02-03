import React from 'react';
import './App.css';

export default function DogItem({ dog }) {
  return <div className="dog">
    <p>{dog.name}</p>
    <p>{dog.breed}</p>
    <p>{dog.color}</p>
    <p>{dog.age}</p>
  </div>;
}
