import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Singup";
import Login from "./pages/login/Login";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
