import reducer, {
  selectOption,
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
});
