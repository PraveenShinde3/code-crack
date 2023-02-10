import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Pages from "./Components/Pages/Pages";

import "./App.css";

function App() {
  return (
    <div className="App overflow-x-hidden ">
      <div className="w-full overflow-hidden">
        <Header />
        <Pages />
        <Footer />
      </div>
    </div>
  );
}

export default App;
