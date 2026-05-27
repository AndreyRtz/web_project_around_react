export default function ConfirmDelete({ card, onCardDelete, isLoading }) {
  function handleSubmit(event) {
    event.preventDefault();
    onCardDelete(card);
  }

  return (
    <form
      className="popup__form popup__form_type_delete"
      id="deleteCard"
      onSubmit={handleSubmit}
      noValidate
    >
      <button
        className="popup__button popup__button_save popup__button_delete"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Eliminando..." : "Si"}
      </button>
    </form>
  );
}