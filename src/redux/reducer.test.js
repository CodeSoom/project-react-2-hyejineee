import reducer, {
  selectOption,
  setCourses,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      selectedOptions: {
        region: '',
        climbingLevel: '',
        season: '',
        activity: '',
      },
      courses: [],
    };

    it('return initial state', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('selectOption', () => {
    const previousState = {
      selectedOptions: {
        region: '',
        climbingLevel: '',
        season: '',
        activity: '',
      },
    };

    describe('select option about region', () => {
      it('change region of selectedOption', () => {
        const { selectedOptions: { region } } = reducer(previousState, selectOption({ name: 'region', value: '서울' }));

        expect(region).toEqual('서울');
      });
    });
  });

  describe('setCourses', () => {
    const previousState = {
      selectedOptions: {
        region: '',
        climbingLevel: '',
        season: '',
        activity: '',
      },
      courses: [],
    };

    const courses = [
      {
        courseName: '1코스',
      },
      {
        courseName: '2코스',
      },
    ];

    context('when exist courses', () => {
      it('change courses', () => {
        const state = reducer(previousState, setCourses(courses));

        expect(state.courses.length).toBe(2);
      });
    });

    context('without courses', () => {
      it('change courses', () => {
        const state = reducer(previousState, setCourses([]));

        expect(state).toBe(previousState);
      });
    });
  });
});
