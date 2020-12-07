import {
  exist,
  converter,
} from './utils';

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

  describe('converter', () => {
    it('return converted data', () => {
      const parser = (str, mimeType) => ({});
      const convertToXml = converter(parser)('text/xml');
      const result = convertToXml('<customer>John Smith</customer>');

      expect(result).toEqual({});
    });
  });
});
