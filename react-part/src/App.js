import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Messenger from "./Pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
