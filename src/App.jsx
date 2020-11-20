import React from 'react';

import {
  questions,
  options,
} from './data';

export default function App() {
  return (
    questions.map((question, i) => (
      <div>
        <p>{question}</p>
        {options[i].map((option, _) => (
          <div>
            <label htmlFor={`option-${option}`}>{option}</label>
            <input type="radio" name={`option-${i}`} id={`option-${option}`} value={option} />
          </div>
        ))}
      </div>
    ))
  );
}
