import { useState, useContext,  useEffect } from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

export default function EditProfile() {
  const { currentUser, handleUpdateUser, isLoading }  = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [isValid, setIsValid] = useState(false);


  useEffect(() => {
    setName(currentUser.name || "");
    setAbout(currentUser.about || "");
    setIsValid(Boolean(currentUser.name && currentUser.about));
  }, [currentUser]);


  function handleChange(event) {
    const form = event.target.closest("form");
    setIsValid(form.checkValidity());

    if (event.target.name === "name") {
      setName(event.target.value);
    }

    if (event.target.name === "about") {
      setAbout(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleUpdateUser({
      name,
      about,
    });
  }
  
  return (
    <form
      className="popup__form"
      id="formEditProfile"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="popup__form">
        <input
          type="text"
          className="popup__input popup__input_name"
          id="name"
          name="name"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
           value={name}
          onChange={handleChange}
        />

        <span className="popup__input-error" id="name-error"></span>

        <input
          type="text"
          className="popup__input popup__input_hobbie"
          id="about"
          name="about"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          required
          value={about}
          onChange={handleChange}
        />

        <span className="popup__input-error" id="about-error"></span>
      </fieldset>

      <button
        type="submit"
        className="popup__button popup__button_save"
        disabled={!isValid || isLoading}
      >
        {isLoading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}