import React, { useState } from 'react';
import Canvas from './Canvas';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [arrows, setArrows] = useState([]);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: { x: 50, y: 50 },
      size: { width: 300, height: 180 },
    };
    setCards([...cards, newCard]);
  };

  const updateCardPosition = (id, position) => {
    setCards(cards.map(card => card.id === id ? { ...card, position } : card));
  };

  const updateCardSize = (id, size) => {
    setCards(cards.map(card => card.id === id ? { ...card, size } : card));
  };

  const addArrow = (start, end) => {
    const newArrow = { id: Date.now(), start, end };
    setArrows([...arrows, newArrow]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Canvas</h1>
        <button onClick={addCard} className="add-card-btn">
          <span className="btn-text">Add Card</span>
          <span className="btn-icon">+</span>
        </button>
      </header>
      <Canvas
        cards={cards}
        arrows={arrows}
        updateCardPosition={updateCardPosition}
        updateCardSize={updateCardSize}
        addArrow={addArrow}
      />
    </div>
  );
}

export default App;

