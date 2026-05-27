import { useRef, useContext, useState  } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function EditAvatar() {

  const { handleUpdateAvatar, isLoading } = useContext(CurrentUserContext);
  const avatarRef = useRef();
  const [isValid, setIsValid] = useState(false);


  function handleChange(event) {
    const form = event.target.closest("form");
    setIsValid(form.checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      className="popup__form"
      id="formEditAvatar"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="popup__form">
        <input
          ref={avatarRef}
          type="url"
          className="popup__input popup__input_type_avatar"
          id="avatar"
          name="avatar"
          placeholder="Enlace de la imagen"
          required
          onChange={handleChange}
        />

        <span className="popup__input-error" id="avatar-error"></span>
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