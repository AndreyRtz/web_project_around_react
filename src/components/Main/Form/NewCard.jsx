import { useState } from "react";
export default function NewCard({ onAddPlaceSubmit, isLoading }) {

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const form = event.target.closest("form");
    setIsValid(form.checkValidity());

    if (event.target.name === "title") {
      setName(event.target.value);
    }

    if (event.target.name === "url") {
      setLink(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlaceSubmit({
      name,
      link,
    });
  }

  return (
    <form
      className="popup__form"
      id="submit_card"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="popup__form">
        <input
          type="text"
          className="popup__input popup__input_title"
          id="title"
          name="title"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={handleChange}
        />

        <span className="popup__input-error" id="title-error"></span>

        <input
          type="url"
          className="popup__input popup__input_url"
          id="url"
          name="url"
          placeholder="Enlace a la imagen"
          required
          value={link}
          onChange={handleChange}
        />

        <span className="popup__input-error" id="url-error"></span>
      </fieldset>

      <button
        className="popup__button popup__button_save"
        type="submit"
        disabled={!isValid || isLoading}
      >
        {isLoading ? "Creando..." : "Crear"}
      </button>
    </form>
  );
}