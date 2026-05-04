import logo from '../../assets/images/Vector-encabezado.svg';

function Header() {
  return (
    <header className="header">
      <img
        className="header__image"
        src={logo}
        alt="logo around the u.s."
      />
    </header>
  );
}

export default Header;