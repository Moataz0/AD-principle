import "./App.css";
import { Button, Footer, Header, Home, Nav, TextField } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      
      </BrowserRouter>
   
  );
}

export default App;
