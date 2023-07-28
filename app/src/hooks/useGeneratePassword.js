import { useState } from "react";

const useGeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = (checkBoxData, length) => {
    let charset = "",
      generatePassword = "";

    const selectedCheckbox = checkBoxData.filter(
      (checkbox) => checkbox.checked
    );

    if (selectedCheckbox.length === 0) {
      setError("Please select at least one option");
      setPassword("");
      return;
    }

    selectedCheckbox.forEach((option) => {
      switch (option.title) {
        case "Uppercase":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Lowercase":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Number":
          charset += "0123456789";
          break;
        case "Symbol":
          charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * charset.length);

      generatePassword += charset[random];
    }
    setPassword(generatePassword);
    setError("");
  };

  return { password, error, generatePassword };
};

export default useGeneratePassword;
