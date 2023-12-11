import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Route, Routes } from "react-router";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0)
  const [mode, setMode] = useState("primary")
  const setProgress = (pro) => {
    setprogress(pro)
  }

  const toggleMode = () => {
    if (mode === "primary") {
      setMode("dark")
      document.body.style.backgroundColor = "#2c343b";
      document.body.style.color = "#fff";

    }
    else {
      setMode("primary")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} mode={mode} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' />} />
          <Route exact path="/business" element={<News apiKey={apiKey} mode={mode} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category='business' />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} mode={mode} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category='entertainment' />} />
          <Route exact path="/health" element={<News apiKey={apiKey} mode={mode} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category='health' />} />
          <Route exact path="/science" element={<News apiKey={apiKey} mode={mode} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category='science' />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} mode={mode} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category='sports' />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} mode={mode} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category='technology' />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;