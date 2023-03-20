import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/Header/header";
import NavRoutes from "./components/nav_routes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavRoutes />
      </Router>
    </>
  );
}

export default App;
