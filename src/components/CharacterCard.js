// src/components/CharacterCard.js
import React from 'react';


function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-image" />
      <h2>{character.name}</h2>
      <p><strong>Role:</strong> {character.role}</p>
      <p><strong>Devil Fruit:</strong> {character.devil_fruit}</p>
    </div>
  );
}

export default CharacterCard;
