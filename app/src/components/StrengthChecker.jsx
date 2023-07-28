import React from "react";

const StrengthChecker = ({ password, checkBoxData }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    const selectedCheckBox = checkBoxData.filter((item) => item.checked);

    if (passwordLength < 1) return "";

    if (passwordLength < 6) {
      if (selectedCheckBox.length > 1) return "Weak 🤐";
      else return "Very Weak 😶";
    }

    if (passwordLength < 9) {
      if (selectedCheckBox.length > 2) return "Medium 🤔";
      else return "Weak 🤐";
    }

    if (passwordLength < 12) {
      if (selectedCheckBox.length > 3) return "Strong 😏";
      else return "Medium 🤔";
    }

    if (passwordLength < 15) return "Strong 😏";

    return "Very Strong 😎";
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="strength">
      Strength: <span>{passwordStrength}</span>
    </div>
  );
};

export default StrengthChecker;
