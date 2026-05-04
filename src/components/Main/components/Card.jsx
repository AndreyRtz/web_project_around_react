import { useState } from "react";


export default function Card(props) {
  const { card, handleOpenPopup } = props;
  const { name, link, isLiked: initialLiked  } = props.card;

  const [isLiked, setIsLiked] = useState(initialLiked);

  function handleLike() {
    setIsLiked(!isLiked);
  }

  // objeto imageComponent
  const imageComponent = {
    name,
    link,
  };


  return (
    <li className="card__content">
      <img className="card__photo" src={link} alt={name} 
       onClick={() => handleOpenPopup(imageComponent)}/>

      <button
        aria-label="Delete card"
        className="card__button-delete"
        type="button"
      />

      <div className="card__info">
        <h2 className="card__photo-name">{name}</h2>

         <button
          aria-label="Like card"
          type="button"
          onClick={handleLike}
          className={`card__button-like ${
            isLiked ? "card__button_like_active" : ""
          }`}
        />
      </div>
    </li>
  );
}