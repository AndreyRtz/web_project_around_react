export default function EditProfile({ onSubmit }) {
  return (
    <form
      className="popup__form"
      id="formEditProfile"
      onSubmit={onSubmit}
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
        />

        <span className="popup__input-error" id="about-error"></span>
      </fieldset>

      <button
        type="submit"
        className="popup__button popup__button_save"
      >
        Guardar
      </button>
    </form>
  );
}