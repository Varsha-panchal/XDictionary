import React, { useState } from 'react';

const XDictionary = () => {
  const initialDictionary = [
    { word: 'React', meaning: 'A JavaScript library for building user interfaces.' },
    { word: 'Component', meaning: 'A reusable building block in React.' },
    { word: 'State', meaning: 'An object that stores data for a component.' },
  ];

  const [dictionary, setDictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [notFoundMessage, setNotFoundMessage] = useState('');

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTermLowerCase
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
      setNotFoundMessage('');
    } else {
      setDefinition('');
      setNotFoundMessage('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {definition && <p>{definition}</p>}
      {notFoundMessage && <p>{notFoundMessage}</p>}
    </div>
  );
};

export default XDictionary;

