import React from 'react';
import './App.css';

export default function DogItem({ dog }) {
  return <div className="dog">
    <p>Name: {dog.name}</p>
    <p>Breed: {dog.breed}</p>
    <p>Color: {dog.color}</p>
    <p>Age: {dog.age}</p>
  </div>;
}
