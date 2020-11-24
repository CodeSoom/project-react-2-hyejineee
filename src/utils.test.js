import { exist } from './utils';

describe('utils', () => {
  describe('exist', () => {
    it('return existed value in array', () => {
      const arrays = [
        ['a', 'b', 'c'],
        [1, 2, 'a'],
      ];

      arrays.forEach((array) => {
        expect(exist('a')(array)).toEqual(true);
      });
    });
  });
});
