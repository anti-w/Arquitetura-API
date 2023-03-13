import { Routes as Switch, BrowserRouter, Route } from "react-router-dom";
import { Animes } from "./views";
import { Home } from "./views";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/animes" element={<Animes />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
