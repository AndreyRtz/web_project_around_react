export default function EditAvatar({ onSubmit }) {
  return (
    <form
      className="popup__content"
      id="formEditAvatar"
      onSubmit={onSubmit}
      noValidate
    >
      <fieldset className="popup__form">
        <input
          type="url"
          className="popup__input popup__input_type_avatar"
          id="avatar"
          name="avatar"
          placeholder="Enlace de la imagen"
          required
        />

        <span className="popup__input-error" id="avatar-error"></span>
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