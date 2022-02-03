import React from 'react';

export default function CatsList({ cats }) {
  return <div>
    {cats.map((cat, i) => <CatItem key={`${cat}-${i}`} cat={cat}/>)}
  </div>;
}
