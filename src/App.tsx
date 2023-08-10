import Header from "./Components/Header"
import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="book">
      <div className="page cover">
        <div className="contents">
          <div className="header_cover">
            <Header />
          </div>
          <div className="body_cover">
            <Body />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
