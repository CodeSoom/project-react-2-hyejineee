import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOptions: {
    region: '',
    climbingLevel: '',
    season: '',
    activity: '',
  },
};

const reducers = {
  selectOption(state, { payload: { name, value } }) {
    const { selectedOptions } = state;
    return (
      {
        ...state,
        selectedOptions: {
          ...selectedOptions,
          [name]: value,
        },
      }
    );
  },
};

const { reducer, actions } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  selectOption,
} = actions;

export default reducer;
