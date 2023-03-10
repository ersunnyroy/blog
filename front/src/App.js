import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <div className='App'>
        <Router>
          <Link>Create Post</Link>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/create-post" />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
