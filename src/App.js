import "./App.css"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import React, { useState } from "react"
import Alert from "./components/Alert"
// import About from "./components/About"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.getElementById("toggle-switch").innerHTML =
        '<i class="fas fa-moon text-light"></i>'
      document.getElementById("toggle-switch").title = "Enable Light mode"
      document.body.style.backgroundColor = "#212529"
      showAlert("Dark mode has been Enabled", "success")
    } else {
      setmode("light")
      document.getElementById("toggle-switch").innerHTML =
        '<i class="fas fa-sun text-dark"></i>'
      document.getElementById("toggle-switch").title = "Enable Dark mode"
      document.body.style.backgroundColor = "#f8f9fa"
      showAlert("Light mode has been Enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About"
        // @ts-ignore
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container textarea">
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <TextForm
          heading="Enter text to Analyze : "
          mode={mode}
          showAlert={showAlert}
        />
        {/* </Route> */}
        {/* <Route exact path="/about"> */}
        {/* <About heading="About Us" mode={mode} /> */}
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
