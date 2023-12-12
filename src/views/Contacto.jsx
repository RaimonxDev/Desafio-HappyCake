import "./Contacto.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contacto() {
  return (
    <section className="d-flex flex-column align-items-center ">
      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      <div className="formulario">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="email@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Asunto</Form.Label>
            <Form.Control type="Descripcion" placeholder="" />
          </Form.Group>

          <Button className="" variant="danger" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </section>
  );
}
export default Contacto;
