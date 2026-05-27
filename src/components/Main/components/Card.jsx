import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext.js";

export default function Card(props) {
  const { card, handleOpenPopup, onCardLike, onCardDelete  } = props;
  const { name, link, } = card;

   const{ currentUser }  = useContext(CurrentUserContext);

   

  // Verifica si el usuario actual le ha dado like
  const isLiked =
  Array.isArray(card.likes) &&
  card.likes.some(i => i._id === currentUser?._id);

  // Clase del botón
  const cardLikeButtonClassName = `card__button-like ${
    isLiked ? 'card__button-like_active' : ''
  }`;
  
   // Handler LIKE
  function handleLikeClick() {
    onCardLike(card);
  }

  // Handler DELETE
  function handleDeleteClick() {
    onCardDelete(card);
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
        onClick={handleDeleteClick}
      />

      <div className="card__info">
        <h2 className="card__photo-name">{name}</h2>

          <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
         onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}