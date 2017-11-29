'use strict';

const fp = require('../lib/fp');

describe(`fp.test.js`, () => {
  describe(`fp.map function`, () => {
    test(`fp.map should return a new array with each element altered based on the callback function`, () => {
      expect(fp.map(x => x + 1, [1,2,3])).toEqual([2,3,4]);
      expect(fp.map(x => x + 1, [])).toEqual([]);
      expect(fp.map(x => x * 2, [1,2,3])).toEqual([2,4,6]);
    });
    test(`fp.map should throw a Type Error if the callback provided is not a function`, () => {
      expect(() => {
        fp.map('I am not a function',[1,2,3])
      }).toThrow();
    });
    //check the type of the arguments provided
  })
  describe(`fp.filter`, () => {
    test(`fp.filter should return a new array with only the elements which fit the specifications provided`, () => {
      expect(fp.filter(num => num > 8, [7,8,9])).toEqual([9]);
      expect(fp.filter(string => string.length > 2, ['a', 'hello', 'eh', 'goodbye'])).toEqual(['hello', 'goodbye']);
    });
    test(`fp.filter should throw a Type Error if the callback provided is not a function`, () => {
      expect(() => {
        fp.filter(`I'm not a function`), [1,2,3]
      }).toThrow();
    })
    //check the type of the arguments provided
  })

  describe(`fp.slice`, () => {
    test(`fp.slice should return a portion of the input from the specified start point to end point (not inclusive`, () => {
      expect(fp.slice(0, 4, ['coding', 'is', 'the', 'best', 'ever'])).toEqual(['coding', 'is', 'the', 'best']);
    })
    //check the type of the arguments provided
  })

  describe(`fp.reduce`, () => {
    test(`fp.reduce should return a single value by adding the current element's value in the initial collection onto the starting value provided`, () => {
      expect(fp.reduce((accumulator, currentValue) => {return accumulator + currentValue}, [0,1,2,3], 0)).toEqual(6);
    })
    test(`fp.reduce should throw a Type Error if the callback provided is not a function`, () => {
      expect(() => {
        fp.reduce(`I am not a function!`, [1,2,3])
      }).toThrow();
    })
    //check the type of the arguments provided
  })
});
