import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import MasterHeader from "./components/MasterHeader/MasterHeader";
import Services from "./components/Services/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <body>
      <Nav></Nav>
      <MasterHeader></MasterHeader>
      <Clients></Clients>
      {/* <Services></Services> */}
      <Portfolio></Portfolio>
      <About></About>
      <Team></Team>
      <Contact></Contact>
    </body>
  );
}

export default App;
