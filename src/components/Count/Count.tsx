import React, { useState } from "react";

export interface CountProps {
  label: string;
  initValue?: number;
  onCountUpdate?: () => void | null;
}

const Count = ({ label, initValue = 0 }: CountProps): JSX.Element => {
  const [value, setValue] = useState(initValue);
  return (
    <div>
      <label>{label}</label>
      <button onClick={() => setValue(value - 1)}>Minus</button>
      <span>{value}</span>
      <button onClick={() => setValue(value + 1)}>Plus</button>
    </div>
  );
};

export default Count;
