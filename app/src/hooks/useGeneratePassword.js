import { useState } from "react";

const useGeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = () => {};

  return { password, error, generatePassword };
};

export default useGeneratePassword;
