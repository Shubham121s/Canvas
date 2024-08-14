import React from 'react';

function Arrow({ start, end }) {
  const dx = end.position.x - start.position.x;
  const dy = end.position.y - start.position.y;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  const length = Math.sqrt(dx * dx + dy * dy);

  return (
    <div
      className="arrow"
      style={{
        width: `${length}px`,
        transform: `rotate(${angle}deg)`,
        top: `${start.position.y + start.size.height / 2}px`,
        left: `${start.position.x + start.size.width / 2}px`,
      }}
    >
      <div className="arrow-head"></div>
    </div>
  );
}

export default Arrow;