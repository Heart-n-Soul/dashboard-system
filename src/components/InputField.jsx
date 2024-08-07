// src/components/InputField.jsx
import React from 'react';

function InputField({ type, placeholder, className, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}

export default InputField;

