import React from 'react';

export default function DogItem({ dog }) {
  return <div>
    <p>{dog.name}</p>
    <p>{dog.breed}</p>
    <p>{dog.color}</p>
    <p>{dog.age}</p>
  </div>;
}
