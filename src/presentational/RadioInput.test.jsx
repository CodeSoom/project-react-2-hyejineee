import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RadioInput from './RadioInput';

describe('RadioInput', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRadioInput() {
    return render(
      <RadioInput
        id={1}
        name="region"
        value="서울"
        onChange={handleChange}
      />,
    );
  }

  it('render label and radio input', () => {
    const { getByLabelText } = renderRadioInput();

    expect(getByLabelText('서울')).not.toBeNull();
  });

  describe('click radio input', () => {
    it('calls handleChange', () => {
      const { getByLabelText } = renderRadioInput();

      fireEvent.click(getByLabelText('서울'));

      expect(handleChange).toBeCalled();
    });
  });
});
