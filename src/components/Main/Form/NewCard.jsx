export default function NewCard({ onSubmit }) {
  return (
    <form
      className="popup__form"
      id="submit_card"
      onSubmit={onSubmit}
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
        />

        <span className="popup__input-error" id="title-error"></span>

        <input
          type="url"
          className="popup__input popup__input_url"
          id="url"
          name="url"
          placeholder="Enlace a la imagen"
          required
        />

        <span className="popup__input-error" id="url-error"></span>
      </fieldset>

      <button
        className="popup__button popup__button_save"
        type="submit"
      >
        Crear
      </button>
    </form>
  );
}