import React from "react";
import "./styles/App.scss";
import Landing from "./components/LandingPage/LandingPage.js";
import Map from "./components/Map.js";
import { auth } from "./firebase.js";
import Panel from "./components/Panel/Panel.js";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (user === null) {
    return <Landing />;
  } else if (user.email === "altosjuegos123@gmail.com") {
    return <Panel />;
  } else {
    return <Map />;
  }
}

export default App;
