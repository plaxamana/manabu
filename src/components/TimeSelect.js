import React from 'react'

export default function TimeSelect({ name, value, checked, onChange, children }) {
  return (
    <div className="timeSelection">
      <input
        className="radio__input" 
        type="radio" 
        name={name} 
        value={value}
        checked={checked} 
        id={`${value}mins`}
        onChange={onChange}
      />
      <label 
        htmlFor={`${value}mins`}
        className="radio__label"
      >{children}</label>
    </div>
  );
}