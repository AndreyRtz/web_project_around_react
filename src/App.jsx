import { useState, useEffect } from "react";
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import api from "./utils/api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {

   const [currentUser, setCurrentUser] = useState({});
   const [popup, setPopup] = useState(null);
   const [cards, setCards] = useState([]);
   const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    api.getUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    
    api
      .userEdit(data.name, data.about)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }
  
  function handleUpdateAvatar(data) {
    setIsLoading(true);
    
  api
    .editAvatar(data.avatar)
    .then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    })
    .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
}

function handleCardDelete(card) {
  setIsLoading(true);

    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
        handleClosePopup();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  function handleCardLike(card) {
    const isLiked =
      Array.isArray(card.likes) &&
      card.likes.some((item) => item._id === currentUser._id);

    const request = isLiked
      ? api.removeLikeCard(card._id)
      : api.likeCard(card._id);

    request
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => console.error(err));
  }

  function handleAddPlaceSubmit(data) {
    setIsLoading(true);

    api
      .createCard(data.name, data.link)
      .then((newCard) => {
        setCards((state) => [newCard, ...state]);
        handleClosePopup();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }


  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, 
                                          handleUpdateAvatar, isLoading  }}>


    <div className="page">
      <Header />
       <Main 
       popup={popup}
       cards={cards}
       isLoading={isLoading}
       onOpenPopup={handleOpenPopup}
       onClosePopup={handleClosePopup}
       onCardLike={handleCardLike}
       onCardDelete={handleCardDelete}
       onAddPlaceSubmit={handleAddPlaceSubmit}
       />

      <Footer/>
    </div>
     </CurrentUserContext.Provider>
  );
}

export default App