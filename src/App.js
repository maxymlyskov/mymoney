import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Singup";
import Login from "./pages/login/Login";
import Navbar from "./components/NavBar/NavBar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
