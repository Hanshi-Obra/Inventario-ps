import React from "react";
import { Button, Container, Row, Modal, Col} from "react-bootstrap";


export default function OutButtons() {
  return (
    <Container
      style={{
        padding: "4%",
        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          style={{
            marginBottom: "5%",
            fontSize: 18,
            backgroundColor: "blue",
            textAlign: "start",
          }}
        >
          + Elemento
        </Button>
        <Button
          style={{ fontSize: 18, marginBottom: "35%", textAlign: "start" }}
        >
          Historial
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="success"
          style={{ marginBottom: "5%", fontSize: 18, textAlign: "start" }}
        >
          + Categoría
        </Button>
        <Button
          style={{ fontSize: 18, backgroundColor: "green", textAlign: "start" }}
        >
          - Categoría
        </Button>
      </div>
    </Container>
  );
}
