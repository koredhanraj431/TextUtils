import React, { useState } from "react"

export default function TextForm(props) {
  // const [InputText, UpdateInputText] = useState("")
  const [text, UpdateText] = useState("")

  const handleOnChange = (event) => {
    console.log("On change")
    document.getElementById("previewText").style.display = "block"
    // UpdateInputText(event.target.value)
    UpdateText(event.target.value)
  }

  const ConvertToUppercase = () => {
    console.log("Uppercase")
    UpdateText(text.toUpperCase())
    props.showAlert("Text has been converted to Uppercase", "success")
  }
  const ConvertToLowercase = () => {
    console.log("Lowercase")
    UpdateText(text.toLowerCase())
    props.showAlert("Text has been converted to lowercase", "success")
  }
  const RemoveExtraSpaces = () => {
    console.log("RemoveExtraSpaces")
    let newText = text.split(/[ ]+/)
    UpdateText(newText.join(" "))
    props.showAlert("Extra spaces has been removed", "success")
  }
  const CopyToClipboard = () => {
    console.log("CopyToClipboard")
    var txt = document.getElementById("InputText")
    // @ts-ignore
    txt.select()
    // @ts-ignore
    txt.setSelectionRange(0, 9999)
    // @ts-ignore
    navigator.clipboard.writeText(txt.value)
    props.showAlert("Text has been copied to clipboard", "success")
  }
  const reset = () => {
    console.log("Reset")
    document.getElementById("previewText").style.display = "none"
    UpdateText("")
    props.showAlert("Text has been reset", "success")
  }

  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
        color: props.mode === "dark" ? "#f8f9fa" : "#212529",
      }}
    >
      <div className="form-group mt-4">
        <h3 className="text-primary">{props.heading}</h3>
        <textarea
          className="form-control"
          id="InputText"
          value={text}
          // @ts-ignore
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={ConvertToUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={ConvertToLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={RemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={CopyToClipboard}
        >
          Copy to Clipboard
        </button>
        <button type="button" className="btn btn-danger m-3" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="container">
        <h4>Your text summary </h4>
        <p>
          {/* Total {text.length > 0 ? text.trim().split(/[ \n]+/).length : 0}{" "} */}
          Total{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0
            }).length
          }{" "}
          words, {text.length} characters,{" "}
          {text.length > 0 ? text.split("\n").length : 0} lines
        </p>
        <p>
          Article is approximately{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0
            }).length}{" "}
          Minutes to read
        </p>
        <h4>Preview here </h4>
        <textarea
          className="form-control"
          id="previewText"
          value={text}
          // @ts-ignore
          rows="8"
          readOnly
        />
      </div>
    </div>
  )
}
