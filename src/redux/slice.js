import { createSlice } from '@reduxjs/toolkit';
import { fetchCourseGPXFile } from 'service/courseGPX';

const initialState = {
  selectedOptions: {
    region: '',
    climbingLevel: '',
    season: '',
    activity: '',
  },
  courses: [],
  courseGPX: '',
};

const reducers = {
  selectOption(state, { payload: { name, value } }) {
    const { selectedOptions } = state;

    return {
      ...state,
      selectedOptions: {
        ...selectedOptions,
        [name]: value,
      },
    };
  },

  setCourses(state, { payload: courses }) {
    return {
      ...state,
      courses,
    };
  },

  setCourseGPX(state, { payload: courseGPX }) {
    return {
      ...state,
      courseGPX,
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
  setCourseGPX,
} = actions;

export function loadCourseGPX(courseId) {
  return async (dispatch) => {
    const courseGPX = await fetchCourseGPXFile(courseId);
    dispatch(setCourseGPX(courseGPX));
  };
}

export default reducer;
