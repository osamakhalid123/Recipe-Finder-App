import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import Recipes from "./Components/Recipes";

function App() {
  return (
    <div>
      <NavBar />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
