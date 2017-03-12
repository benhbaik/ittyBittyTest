var actualObject = {
    arr: [1, 2, {name: 'ben', age: 23}, 'test', true, [1, 2]],
    prop: function() {
        console.log(this);
    },
    key: 2
};
var expectedObject = {
    key: 2,
    prop: function() {
        console.log(this);
    },
    arr: [1, 2, {name: 'ben', age: 23}, 'test', true, [1, 2]]
};
var actualArray = [1, 2, 3];
var expectedArray = [1, 2, 3];

// debugger;
console.log(ittyBittyTest.assertObjectDeepEquals(actualObject, expectedObject));
