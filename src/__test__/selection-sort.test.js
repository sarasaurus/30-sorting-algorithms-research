'use strict';

import selectionSort from '../lib/selection-sort';

describe('testing Selection Sort', () => {
  test('it should sort in ascending order', () => {
    const testArray = [5, 9, 4, 1, 3, 2, 6, 7, 8];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    selectionSort(testArray);
    expect(testArray).toEqual(sortedArray);
  });
  test('it should throw error', () => {
    const testArray = [];
    expect(() => {
      selectionSort(testArray);
    }).toThrow();
  });
  test('it should throw error for invalid input', () => {
    const testArray = [1, 'a', 'b'];
    expect(() => {
      selectionSort(testArray);
    }).toThrowError();
  });
});

