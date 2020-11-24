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
      <input
        type="radio"
        name={name}
        id={`${name}-${id}`}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={`${name}-${id}`}>{value}</label>
    </>
  );
}
