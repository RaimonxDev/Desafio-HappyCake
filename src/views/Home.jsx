import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <section className="d-flex flex-column align-items-center">
      <h1>
        Bienvenido a{" "}
        <span className="happy-cake">
          <FontAwesomeIcon icon={faBirthdayCake} /> Happy Cake
        </span>
      </h1>
      <div className="custom-small">
        <div className="custom-imagen">
          <img src="public/pastel.png" alt="torta" width="200px" />
        </div>
      </div>
      <p className="mt-2">Donde encontraras los mejores pasteles</p>
    </section>
  );
}

export default Home;
