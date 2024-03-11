import { describe, expect, it } from 'vitest';
import { initializeTimes } from '../api/api';

describe('initializeTimes', () => {
  it('returns an array of times between 16:00 and 22:00', () => {
    const { times }  = initializeTimes();
    const format = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    expect(times).not.toHaveLength(0); // Ensure some times are returned
    for (let time of times) {
      // You can customize assertions based on your time format:
      expect(time).toBeTypeOf("string"); // Example for 24-hour format
        expect(time).toMatch(format);
      expect(Number(time.slice(0, 2))).toBeGreaterThanOrEqual(16);
      expect(Number(time.slice(0, 2))).toBeLessThanOrEqual(22);
    }
  });
});