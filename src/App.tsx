import { useEffect, useState } from "react";
import "./App.css";
import { propertiesList, you } from "./mocks";
import PropertyList from "./components/property/propertyList";

function App() {
  const [username, setUsername] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  const setUser = (username: string, isReturning: boolean): void => {
    setUsername(username);
    setGreeting(isReturning ? "Welcome back" : "Welcome");
  };

  useEffect(() => {
    setUser(you.user.firstName, you.isReturning);
  }, []);

  return (
    <div className="App">
      <div className="nav-bar">
        <div className="logo" />
        <h3 className="user-container">
          <span id="returning-user">
            {greeting} {username}
          </span>
        </h3>
      </div>
      <PropertyList list={propertiesList} />
    </div>
  );
}

export default App;
