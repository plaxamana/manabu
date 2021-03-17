import React from 'react'

export default function TimeSelect({ time }) {
  return (
    <div className="timeSelection">
      <input
        className="radio__input" 
        type="radio" 
        name="time" 
        value={time} 
        id={`${time}mins`} 
      />
      <label 
        htmlFor={`${time}mins`}
        className="radio__label"
      >{time} mins</label>
    </div>
  );
}