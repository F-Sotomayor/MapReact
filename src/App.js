import React from "react";
import "./styles/App.scss";
import Landing from "./components/LandingPage/LandingPage";
import Map from "./components/Map";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return user ? <Map /> : <Landing />;
}

export default App;
