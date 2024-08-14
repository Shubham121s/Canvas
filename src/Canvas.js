import React from 'react';
import Card from './Card';
import Arrow from './Arrow';

function Canvas({ cards, arrows, updateCardPosition, updateCardSize, addArrow }) {
  return (
    <div className="canvas" style={{ width: '2000px', height: '2000px', position: 'relative', overflow: 'auto' }}>
      {cards.map(card => (
        <Card
          key={card.id}
          {...card}
          updatePosition={(position) => updateCardPosition(card.id, position)}
          updateSize={(size) => updateCardSize(card.id, size)}
          onConnect={(endCard) => addArrow(card.id, endCard.id)}
        />
      ))}
      {arrows.map(arrow => (
        <Arrow
          key={arrow.id}
          start={cards.find(card => card.id === arrow.start)}
          end={cards.find(card => card.id === arrow.end)}
        />
      ))}
    </div>
  );
}

export default Canvas;
