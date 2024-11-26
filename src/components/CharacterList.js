// src/components/CharacterList.js
import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="character-list">
      {characters.length > 0 ? (
        characters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))
      ) : (
        <p>Loading characters...</p>
      )}
    </div>
  );
}

export default CharacterList;
