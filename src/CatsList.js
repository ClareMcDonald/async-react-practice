import React from 'react';
import CatItem from './CatItem';

export default function CatsList({ cats }) {
  return <div>
    {cats.map((cat, i) => <CatItem key={`${cat}-${i}`} cat={cat}/>)}
  </div>;
}
