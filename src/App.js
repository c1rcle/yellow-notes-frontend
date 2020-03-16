import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Registration from "./components/pages/Registration";
import Login from "./components/pages/Login";
import Notes from "./components/pages/Notes";
import FadingRoute from "./components/common/FadingRoute";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <FadingRoute exact key="0" path="/" component={Login} />
          <FadingRoute
            exact
            key="1"
            path="/registration"
            component={Registration}
          />
          <FadingRoute exact key="2" path="/notes" component={Notes} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
