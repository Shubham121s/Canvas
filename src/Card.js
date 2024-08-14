import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import Modal from 'react-modal';

function Card({ id, text, position, size, updatePosition, updateSize, onConnect }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDrag = (e, data) => {
    updatePosition({ x: data.x, y: data.y });
  };

  const onResize = (event, { size }) => {
    updateSize(size);
  };

  return (
    <>
      <Draggable
        position={position}
        onDrag={onDrag}
        onStop={() => onConnect({ id, position, size })}
      >
        <Resizable
          width={size.width}
          height={size.height}
          onResize={onResize}
          minConstraints={[200, 120]}
          maxConstraints={[500, 300]}
        >
          <div className="card" style={{ width: size.width, height: size.height }}>
            <div className="card-content">
              <p>{text.slice(0, 100)}...</p>
              <button onClick={() => setIsModalOpen(true)} className="show-more-btn">
                <span className="btn-text">Show More</span>
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>
        </Resizable>
      </Draggable>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Card Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Card Details</h2>
        <p>{text}</p>
        <button onClick={() => setIsModalOpen(false)} className="close-btn">Close</button>
      </Modal>
    </>
  );
}

export default Card;

