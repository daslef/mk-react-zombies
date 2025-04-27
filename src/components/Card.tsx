import "./Card.css";
import evadeIcon from "../assets/evade.svg";

export default function Card() {
  return (
    <article className="card">
      <header className="header card__header">
        <img className="icon header__icon" src="" alt="" />
        <h2 className="title header__title"></h2>
      </header>
      <main className="main card__main">
        <img className="icon main__icon" src="" alt="" />
      </main>
      <footer className="footer card__footer">
        <img className="icon footer__icon" src="" alt="" />
        <h2 className="footer__title"></h2>
      </footer>
    </article>
  );
}
