import React, { useState } from "react";
import './cssfile/Mainbody.css';

const Dropdown = ({ label, options, isVisible, toggleDropdown }) => (
  <div className="dropdown">
    <button onClick={toggleDropdown} className="dropbtn">
      {label}
    </button>
    {isVisible && (
      <div className="dropdown-content">
        {options.map((option, index) => (
          <a key={index} className={option.className}>
            {option.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

function Mainbody() {
  const [ciphertext, setCiphertext] = useState("");
  const [plaintext, setPlaintext] = useState("");
  const [isCipherDropdownVisible, setCipherDropdownVisible] = useState(false);
  const [isPlaintextDropdownVisible, setPlaintextDropdownVisible] = useState(false);

  const handleCiphertextChange = (e) => {
    setCiphertext(e.target.value);
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    setPlaintext(ciphertext); // Example: just echoing the input
  };

  const handleClear = () => {
    setCiphertext("");
    setPlaintext("");
  };

  const cipherOptions = [
    { label: "Hex", className: "hex" },
    { label: "Octal", className: "oct" },
    { label: "Binary", className: "binary" },
    { label: "Decimal", className: "decimal" },
    { label: "Plaintext", className: "plain" },
  ];

  const plaintextOptions = [
    { label: "Hex", className: "hex1" },
    { label: "Octal", className: "oct1" },
    { label: "Binary", className: "binary1" },
    { label: "Decimal", className: "decimal1" },
    { label: "Plaintext", className: "plain" },
  ];

  return (
    <main className="main">

    <div className="main-body">
      <div className="all-boxes">
        <div className="box-adjust-left">
          <Dropdown
            label="Plaintext"
            options={cipherOptions}
            isVisible={isCipherDropdownVisible}
            toggleDropdown={() => setCipherDropdownVisible(!isCipherDropdownVisible)}
          />
          <form className="padds">
            <div className="box">
              <div className="area-d">
                <p>Input</p>
              </div>
              <textarea
                className="form-control"
                id="ciphertext"
                name="ciphertext"
                rows="4"
                value={ciphertext}
                onChange={handleCiphertextChange}
                placeholder="Enter Your Cipher Here ..."
              />
            </div>
          </form>
        </div>
        <div className="box-adjust-middle">
          <button className="button1" onClick={handleSubmit}>
            <p>Submit</p>
          </button>
          <button className="button2" onClick={handleClear}>
            <p>Clear</p>
          </button>
        </div>
        <div className="box-adjust-right">
          <Dropdown
            label="Plaintext"
            options={plaintextOptions}
            isVisible={isPlaintextDropdownVisible}
            toggleDropdown={() => setPlaintextDropdownVisible(!isPlaintextDropdownVisible)}
          />
          <div className="padds1">
            <div className="box1">
              <div className="area-d">
                <p>Output</p>
              </div>
              <textarea
                readOnly
                className="form-control"
                id="plaintext"
                name="plaintext"
                rows="4"
                value={plaintext}
                placeholder="Your Output Here ..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Mainbody;