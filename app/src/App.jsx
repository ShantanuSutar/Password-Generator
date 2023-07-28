import { useState } from "react";
import useGeneratePassword from "./hooks/useGeneratePassword";

function App() {
  const [length, setLength] = useState(6);

  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Uppercase", checked: true },
    { title: "Lowercase", checked: true },
    { title: "Number", checked: false },
    { title: "Symbol", checked: false },
  ]);

  const { password, error, generatePassword } = useGeneratePassword();

  // console.log(password);

  function handleChangeCheckbox(index) {
    const updatedCheckBoxData = [...checkBoxData];
    updatedCheckBoxData[index].checked = !updatedCheckBoxData[index].checked;
    setCheckBoxData(updatedCheckBoxData);
    console.log(checkBoxData);
  }

  return (
    <section className="container">
      {password && (
        <header className="header">
          <div className="title">{password}</div>
          <button className="copyBtn">Copy</button>
        </header>
      )}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="checkboxes">
        {checkBoxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => handleChangeCheckbox(index)}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      <button
        className="generateBtn"
        onClick={() => generatePassword(checkBoxData, length)}
      >
        Generate Password
      </button>
    </section>
  );
}

export default App;
