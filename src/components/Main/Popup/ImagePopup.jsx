import Popup from "./Popup.jsx";

export default function ImagePopup({ card, onClose }) {
  return (
    <Popup onClose={onClose}>
      {card && (
        <>
          <img
            src={card.link}
            alt={card.name}
            className="popup__image"
          />
          <p className="popup__caption">{card.name}</p>
        </>
      )}
    </Popup>
  );
}