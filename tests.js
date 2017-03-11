var actualNestedArray = [[1,2,3], [[1, 2], 3]];
var expectedNestedArray = [[1,2,3], [[1, 2], [1, 2]]];
// debugger;
console.log(ittyBittyTest.assertArrayStrictEquals(actualNestedArray, expectedNestedArray));
