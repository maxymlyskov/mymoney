import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Singup";
import Login from "./pages/login/Login";
import Navbar from "./components/NavBar/NavBar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path="/">
                {!user ? <Redirect to="/login" /> : <Home />}
              </Route>
              <Route exact path="/signup">
                {user ? <Redirect to="/" /> : <Signup />}
              </Route>
              <Route exact path="/login">
                {user ? <Redirect to="/" /> : <Login />}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
