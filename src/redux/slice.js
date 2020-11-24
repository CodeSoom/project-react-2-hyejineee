import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOptions: {
    region: '',
    climbingLevel: '',
    season: '',
    activity: '',
  },
  courses: [],
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

  setCourses(state, { payload: courses }) {
    return {
      ...state,
      courses,
    };
  },
};

const { reducer, actions } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  selectOption,
  setCourses,
} = actions;

export default reducer;
