import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Button } from "react-bootstrap";
import AllButtons from "./components/AllButtons";
import OutButtons from "./components/OutButtons";
import SearchBar from "material-ui-search-bar";
import RctnglProduct from "./components/RctnglProduct";
import AppBar from "@material-ui/core/AppBar";

export default function Inventario() {
  const [input, setInput] = useState("");

  return (
    <div style={{ height: "100%", width: "100%",marginTop:"3%" }}>
      <AppBar position="absolute">
          <Button color="inherit">Guardar cambios</Button>
      </AppBar>
      <Row>
        <div
          style={{
            height: "100%",
            width: "18%",
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "2%",
            marginRight: "2%",
            marginTop: "1%",
            flexDirection: "column",
          }}
        >
          <AllButtons />
          <OutButtons />
        </div>
        <div style={{ marginTop: "1%", width: "70%" }}>
          {/* <SearchBar
            style={{ width: "100%" }}
            value={this.state.value}
            onChange={(newValue) => this.setState({ value: newValue })}
            onRequestSearch={() => console.log(this.state.value)}
          /> */}
          <div>Aqui va el searchbar</div>
          <RctnglProduct />
        </div>
      </Row>
    </div>
  );
}
