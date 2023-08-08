import {zeroPaddiong} from './padding';

describe('zeroPaddiong', () => {
  it('should return 0-padded string 1', () => {
    const result = zeroPaddiong('1', 2);
    expect(result).toBe('01');
  });

  it('should return 0-padded string 2', () => {
    const result = zeroPaddiong('1', 1);
    expect(result).toBe('1');
  });
});
