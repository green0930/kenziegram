import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/screen/home/Home";
import { Photos } from "./components/screen/photos/Photos";
import { BCard } from "./components/screen/card/BCard";

function App() {
  return (
    <>
      <NavBar />
      <Switch className="box">
        <Container className="box">
          <Route exact path="/" component={Home} />
          <Route path="/photos" component={Photos} />
          <Route path="/photos/:filename" component={BCard} />
        </Container>
      </Switch>
    </>
  );
}

export default App;
