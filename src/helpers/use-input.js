import React, { useState } from "react";

function useInput(validateFn) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateFn(value);
  const hasError = !isValid && isTouched;
  function valueChangeHandler(text) {
    setValue(text);
  }
  function inputBlurEventHandler() {
    setIsTouched(true);
  }
  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurEventHandler,
  };
}

export default useInput;
