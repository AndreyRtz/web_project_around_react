import { useState, useContext } from "react";
// import api from "../../utils/api";

import editIcon from '../../assets/images/Edit-Button.png'
import addIcon from '../../assets/images/Add-Button.png'

import Popup from "./Popup/Popup.jsx";
import NewCard from "./Form/NewCard.jsx";
import EditProfile from "./Form/EditProfile.jsx";
import EditAvatar from "./Form/EditAvatar.jsx";
import ConfirmDelete from "./Form/ConfirmDelete.jsx";
import Card from "./components/Card.jsx";
import ImagePopup from "./Popup/ImagePopup";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";


function Main({ popup, cards, isLoading, onOpenPopup, onClosePopup, onCardLike,
                onCardDelete, onAddPlaceSubmit, }) {

  const { currentUser }  = useContext(CurrentUserContext);
  // const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

   const newCardPopup = {
    title: "Nuevo lugar",
    children: (
      <NewCard
        onAddPlaceSubmit={onAddPlaceSubmit}
        isLoading={isLoading}
      />
    ),
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar avatar",
    children: <EditAvatar />,
  };

//   useEffect(() => {
//     api.getInitialCards()
//       .then((data) => {
//         setCards(data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   function handleCardDelete(card) {
//   api.deleteCard(card._id)
//     .then(() => {
//       setCards((state) =>
//         state.filter((currentCard) => currentCard._id !== card._id)
//       );
//     })
//     .catch((error) => console.error(error));
// }

//   function handleCardLike(card) {
//     const isLiked =
//       Array.isArray(card.likes) &&
//       card.likes.some((item) => item._id === currentUser._id);

//     const request = isLiked
//       ? api.removeLikeCard(card._id)
//       : api.likeCard(card._id);

//     request
//       .then((newCard) => {
//         setCards((state) =>
//           state.map((currentCard) =>
//             currentCard._id === card._id ? newCard : currentCard
//           )
//         );
//       })
//       .catch((error) => console.error(error));
//   }

//   const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
//   const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
//   const editAvatarPopup = { title: "Cambiar avatar", children: <EditAvatar /> };

//     function handleOpenPopup(popup) {
//     setPopup(popup);
//   }

//     function handleClosePopup() {
//     setPopup(null);
//   }

   function handleOpenImage(card) {
    setSelectedCard(card);
  }

  function handleCloseImage() {
    setSelectedCard(null);
  }

  function handleDeleteClick(card) {
    onOpenPopup({
      title: "¿Estás seguro?",
      children: (
        <ConfirmDelete
          card={card}
          onCardDelete={onCardDelete}
          isLoading={isLoading}
        />
      ),
    });
  }

  return (
    <main className="content">
      <section className="profile">

        {/* Imagen Perfil */}
        <div className="profile__person-container"
        onClick={() => onOpenPopup(editAvatarPopup)}
        >
          <img 
            className="profile__person" 
            src={currentUser.avatar} 
            alt={currentUser.name} 
          />
        </div>

        <div className="profile__content">

          {/* Datos de Perfil */}
          <div className="profile__paragraph">
            <p className="profile__name">{currentUser.name}</p>
            <p className="profile__hobbie">{currentUser.about}</p>
          </div>

          {/* Botón editar */}
          <button 
          aria-label="Edit avatar"
          className="profile__edit-button"
          type="button"
          onClick={() => onOpenPopup(editProfilePopup)}>
            
            <img
              className="profile__edit-button-img"
              src={editIcon}
              alt="editar perfil"
            />
          </button>
        </div>

        {/* Botón agregar */}
        <button className="profile__add-button"
         type="button"
         onClick={() =>  onOpenPopup(newCardPopup)}
         >

          <img
            className="profile__add-button-img"
            src={addIcon}
            alt="agregar"
          />
        </button>

      </section>

       <section className="card">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} 
            handleOpenPopup={handleOpenImage}
            onCardLike={onCardLike} 
             onCardDelete={handleDeleteClick}  />
          ))}
        </ul>
      </section>

       {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

{/* Popup imagen */}
      {selectedCard && (
  <ImagePopup card={selectedCard} onClose={handleCloseImage} />
)}
    </main>
  )
}

export default Main;