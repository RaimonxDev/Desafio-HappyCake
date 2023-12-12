import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <div>
          <Link to="/" className="text-white ms-3 text-decoration-none text-justify-start">
            <FontAwesomeIcon icon={faHome} className="me-2" /> Home
          </Link>
          <Link to="/contact" className="text-white ms-3 text-decoration-none">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contacto
          </Link>
        </div>

        <Navbar.Brand>
          <FontAwesomeIcon icon={faBirthdayCake} className="me-2" /> Happy Cake
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;

