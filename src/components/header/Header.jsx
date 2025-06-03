import "./Header.css";

function Header() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 21;

  let isOpen;
  isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div>
      <header className="header">
        <h1>Electronik store</h1>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">Catalog</a>
            </li>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#home">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="working-hours">
          {isOpen ? (
            <p>
              We are currently open. Hours: {openHour}:00 - {closeHour}:00
            </p>
          ) : (
            <p>
              We are currently close. Hours: {closeHour}:00 - {openHour}:00
            </p>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
