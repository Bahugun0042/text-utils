import "./App.css";
// import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  // const bg=(y)=>{
  //   console.log(y)

  // }

  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2b3238";
      showAlert("Dark mode is enabled!!!!!!!!!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!!!!!!!!!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="enter your text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>

          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
