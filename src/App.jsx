import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import MasterHeader from "./components/MasterHeader/MasterHeader";
import Services from "./components/Services/Service";
function App() {
  return (
    <body>
      <Nav></Nav>
      <MasterHeader></MasterHeader>
      <Services></Services>
    </body>
  );
}

export default App;
