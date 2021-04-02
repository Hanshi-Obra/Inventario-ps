import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import productoejemplo from "../imagenes/productoejemplo.jpg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Editar from "./Editar";

export default function RctnglProduct() {
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  

  const handleChange = (event) => {
    console.log(typeof(event.target.value ))
    setCantidad(0)
    setCantidad(event.target.value )
  };

  function Suma() {
    setCantidad(cantidad + 1);
  }
  function Resta() {
    setCantidad(cantidad - 1);
    if (cantidad == 0) {
      setCantidad(cantidad + 0);
    }
  }

  return (
    <div style={{ width: "100%", backgroundColor: "#d3d3d3", height: "25%" }}>
      <Row>
        <div
          style={{
            width: "13%",
            backgroundColor: "white",
            height: 108,
            marginLeft: "3%",
            marginTop: "1%",
            marginRight: "1%",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={productoejemplo}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.6%",
            justifyContent: "space-around",
            marginRight: "2.5%",
            fontWeight: "bold",
          }}
        >
          <div>Nombre: </div>
          <div>Formato: </div>
          <div>Código: </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.6%",
            justifyContent: "space-around",
            width: "16%",
          }}
        >
          <div>HELIOCARE 360°</div>
          <div>ejemplo 2</div>
          <div>ejemplo 3</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.6%",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#329932",
            width: "12%",
            textAlign: "center",
          }}
        >
          <div>Cantidad</div>
          <TextField
            autoComplete="off"
            id="cantidad"
            variant="outlined"
            style={{ borderColor: "#005900" }}
            InputLabelProps={{
              shrink: true,
            }}
            color="primary"
            value={cantidad}
            size="small"
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "5.5%",
            width: "10%",
            height: "25%",
            marginLeft: "1%",
          }}
        >
          <Button
            variant="success"
            style={{ width: "45%", height: "100%", marginRight: "5%" }}
            onClick={Suma}
            active
          >
            +
          </Button>
          <Button
            variant="danger"
            style={{ width: "45%", height: "100%", marginRight: "100%" }}
            onClick={Resta}
          >
            -
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.6%",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#329932",
            width: "12%",
            textAlign: "center",
          }}
        >
          <div>Precio</div>
          <TextField
            autoComplete="off"
            id="cantidad"
            variant="outlined"
            style={{ borderColor: "#005900" }}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            color="primary"
            placeholder={precio}
            helperText="Solo números"
            size="small"
          />
        </div>
        <Editar />
      </Row>
    </div>
  );
}
