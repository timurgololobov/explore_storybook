import React, { useState } from "react";
import "./testbutton.css";

interface TestButtonProps {
  label: string;
}

export const TestButton = ({ label, ...props }: TestButtonProps) => {
  const [el, setEl] = useState();
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};
