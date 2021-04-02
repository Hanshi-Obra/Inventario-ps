import React from 'react'
import { Button, Container, Row, Modal, Col, Nav } from "react-bootstrap";

export default function AllButtons() {
    return (
        <Container
            className="block-example border border-secundary"
            style={{
              padding: "4%",
              paddingTop: "10%",
              paddingBottom: "10%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                style={{ marginBottom: "5%", fontSize: 18 }}
                variant="success"
              >
                Todos
              </Button>
              <Button
                style={{ marginBottom: "5%", fontSize: 18 }}
                variant="success"
              >
                Productos
              </Button>
              <Button style={{ fontSize: 18 }} variant="success">
                Servicios
              </Button>
            </div>
          </Container>
    )
}
