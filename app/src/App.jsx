import { useState } from "react";

function App() {
  const [length, setLength] = useState(6);

  const checkBoxData = [
    { title: "Uppercase", checked: true },
    { title: "Lowercase", checked: true },
    { title: "Number", checked: true },
    { title: "Symbol", checked: true },
  ];

  return (
    <section className="container">
      <header className="header">
        <div className="title">KHUHjjioasfd$@</div>
        <button className="copyBtn">Copy</button>
      </header>
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
              <input type="checkbox" checked={checkbox.checked} />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      <button className="generateBtn">Generate Password</button>
    </section>
  );
}

export default App;
