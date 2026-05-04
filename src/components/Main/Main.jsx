import { useState } from "react";
import perfil from '../../assets/images/perfil.jpg'
import editIcon from '../../assets/images/Edit-Button.png'
import addIcon from '../../assets/images/Add-Button.png'

import Popup from "./Popup/Popup.jsx";
import NewCard from "./Form/NewCard.jsx";
import EditProfile from "./Form/EditProfile.jsx";
import EditAvatar from "./Form/EditAvatar.jsx";
import Card from "./components/Card.jsx";
import ImagePopup from "./Popup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

function Main() {

   const [popup, setPopup] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Cambiar avatar", children: <EditAvatar /> };

    function handleOpenPopup(popup) {
    setPopup(popup);
  }

    function handleClosePopup() {
    setPopup(null);
  }

   function handleOpenImage(card) {
    setSelectedCard(card);
  }

  function handleCloseImage() {
    setSelectedCard(null);
  }

  return (
    <main className="content">
      <section className="profile">

        {/* Imagen Perfil */}
        <div className="profile__person-container">
          <img className="profile__person" src={perfil} alt="Foto de perfil" />
          

        </div>

        <div className="profile__content">

          {/* Datos de Perfil */}
          <div className="profile__paragraph">
            <p className="profile__name">Andrey rtz</p>
            <p className="profile__hobbie">Explorador</p>
          </div>

          {/* Botón editar */}
          <button 
          aria-label="Edit avatar"
          className="profile__edit-button"
          type="button"
          onClick={() => handleOpenPopup(editProfilePopup)}>
            
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
         onClick={() => handleOpenPopup(newCardPopup)}
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
            handleOpenPopup={handleOpenImage}/>
          ))}
        </ul>
      </section>

       {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
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

export default Main