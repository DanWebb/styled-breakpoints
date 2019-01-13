import { widthMinMedia, withMaxMedia, widthMinAndMaxMedia } from '.';

describe('HOFs', () => {
  describe('widthMinMedia', () => {
    it('should return string containing the breakpoint value  with media query', () => {
      expect(widthMinMedia('40em')).toEqual('@media (min-width: 40em)');
    });
  });

  describe('withMaxMedia', () => {
    it('should return string containing the breakpoint value  with media query', () => {
      expect(withMaxMedia('40em')).toEqual('@media (max-width: 40em)');
    });
  });

  describe('widthMinAndMaxMedia', () => {
    it('should return string containing the breakpoint value  with media query', () => {
      expect(widthMinAndMaxMedia('40em', '60em')).toEqual(
        '@media (min-width: 40em) and (max-width: 60em)',
      );
    });
  });
});