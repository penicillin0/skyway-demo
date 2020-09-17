import React from "react";
import "./App.css";
import Viewer from "./pages/Viewer";
import Broadcast from "./pages/Broadcast";
import Event from "./pages/Event";
import EventList from "./pages/EventList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/event/:event_id"> */}
          {/* <Event /> */}
          {/* </Route> */}
          <Route exact path="/event/:event_id/broadcast">
            <Broadcast />
          </Route>
          <Route exact path="/event/:event_id/viewer">
            <Viewer />
          </Route>
          <Route path="/">
            <Event />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
