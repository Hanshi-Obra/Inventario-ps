import React, { useState } from "react";
import { Button, Modal, Row, Container } from "react-bootstrap";
import productoejemplo from "../imagenes/productoejemplo.jpg";

export default function Editar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          width: "10%",
          height: "100%",
          marginTop: "5.5%",
          marginLeft: "4%",
        }}
      >
        Editar
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Container
              style={{ width: "30%", height: "30%", marginLeft:"8%" }}
              className="block-example border border-dark"
            >
              <img
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  width:"100%",
                  height: "100%",
                }}
                src={productoejemplo}
              />
            </Container>
            <div style={{ marginRight:"10%"}}>
              <form>
                <label style={{ display: "flex", flexDirection: "column" }}>
                  Producto:
                  <input type="text" name="name" /> 
                  Descripción:
                  <input type="text" name="name" /> 
                </label>
              </form>
            </div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            value="Submit"
            variant="primary"
            onClick={handleClose}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
