import Header from "./Components/Header"
import "./App.css";
import Body from "./Components/Body";

function App() {

  return (
    <div className="book">
      <div className="page cover">
        <div className="header_cover">
          <Header />
        </div>
        <div className="body_cover">
          <Body />
        </div>
      </div>
    </div>
  )
}

export default App
