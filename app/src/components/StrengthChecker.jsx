import React from "react";

const StrengthChecker = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) return "";
    else if (passwordLength < 6) return "Very Weak";
    else if (passwordLength < 9) return "Weak";
    else if (passwordLength < 12) return "Medium";
    else if (passwordLength < 15) return "Strong";
    else return "Very Strong";
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
