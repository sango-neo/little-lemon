import { describe, expect, it, vi } from 'vitest';
import { initializeTimes, updateTimes, fetchAPI } from '../api/api';
import { afterEach, beforeEach } from 'node:test';


describe('api.js functions', () => {
    
    // Mock fetchAPI for both tests
    beforeEach(() => {
        vi.mock('../api/api', () => {
            return {
                fetchAPI: (date) => ["16:00", "16:30", "18:00"],
                initializeTimes: () => ({ times: ["17:00", "19:00"]}),
                updateTimes: (state, action) => { 
                    if (action.type === "timeUpdate") {
                        return { times: fetchAPI("2024-03-15") }
                    }
                 }
            }
        });
    });

    afterEach(() => {
        vi.clearAllMocks;
    })

    describe('initializeTimes', () => {

    it('returns an array of times between 16:00 and 22:30', () => {
        const { times }  = initializeTimes();
        const format = /^(1[6-9]|2[0-1]):([0-2][0-9]|30)$/;

        expect(times).not.toHaveLength(0); // Ensure some times are returned
        for (let time of times) {
        expect(time).toBeTypeOf("string"); // Example for 24-hour format
            expect(time).toMatch(format);
        expect(Number(time.slice(0, 2))).toBeGreaterThanOrEqual(16);
        expect(Number(time.slice(0, 2))).toBeLessThanOrEqual(22);
        }
    });
    });


    describe('updateTimes reducer', () => {
        it('updates the times array with fetched data when action type is timeUpdate', () => {
            const initialState = { times: [] };
            const action = { type: 'timeUpdate', date: '2024-03-15' }; // Example date
      
            const newState = updateTimes(initialState, action);
      
            expect(newState.times).toEqual(['16:00', '16:30', '18:00']); // Adjust mocked times if needed
          });
    });
});