import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => (
    setAlert({
      msg : message,
      type : type
    })
  )


  const[mode, setMode] = useState("light");
  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode Enabled.", "success")
      
      setTimeout(() =>{
        setAlert(null)
      },1500)
      setInterval(()=>{
        document.title = "Dark Mode Enabled."
      },2000)
      setInterval(()=>{
        document.title = "This is my textutils app."
      },1400)
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled.", "success");
      document.title = "Light Mode Enabled."
      setTimeout(() => {
        setAlert(null)
      },1500)
    }
  }

  return (
    <>
    <Router>
      <Navbar titl="TextUtilities" mode={mode} togglMode={toggleMode} about="About Us" home="Home" contact="Contact Us"/>
      <Alert alert={alert}/>
      <Routes>
          <Route path="/aboutus" element={<AboutUs/>}>
            
          </Route>
            
          <Route path="/" element={<TextForm heading="Enter a Text To analyse." mode={mode}/>}>
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
