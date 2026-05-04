import { useEffect } from "react";

export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;

   // Cerrar con tecla Escape
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  // Cerrar al hacer clic en el overlay
  function handleOverlayClick(evt) {
    if (evt.target.classList.contains("popup")) {
      onClose();
    }
  }

  return (
    <div className="popup popup_opened"
    
    onClick={handleOverlayClick}
    >
       <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >

      </div>
      <div className="popup__conteiner">
      <div className="popup__content">
        <button
          aria-label="Close modal"
          className="popup__button_close"
          type="button"
          onClick={onClose}
        >
  ×
</button>
         {title && <h3 className="popup__title">{title}</h3>}

        {children}
        
      </div>
    </div>
    </div>
  );
}