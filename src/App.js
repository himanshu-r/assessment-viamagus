
import './App.css';
import DatePicker from './components/DatePicker/DatePicker';
import Login from './components/Login/Login';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
          path="*"
          element={<Login/>} />
          <Route
          path="/date"
          element={<DatePicker/>} />
          <Route
          path="video"
          element={<VideoPlayer/>} />

          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
