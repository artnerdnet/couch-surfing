import "./App.css";
import { propertiesList, you } from "./mocks";
import PropertyList from "./components/property/propertyList";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar currentUser={you} />
      <PropertyList list={propertiesList} />
    </div>
  );
}

export default App;
