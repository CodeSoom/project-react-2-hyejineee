import React from 'react';

export default function RadioInput({
  id, name, value, onChange,
}) {
  function handleChange(event) {
    const { target } = event;
    onChange({ name: target.name, value: target.value });
  }

  return (
    <>
      <label htmlFor={`option-${id}`}>{value}</label>
      <input
        type="radio"
        name={name}
        id={`option-${id}`}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
