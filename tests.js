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
var actualArray = [1, 2, 3, [1, 2, [1, 2, 3]]];
var expectedArray = [1, 2, 3, [1, 2, [1, 2, 3]]];


tests({
    'it should return true': function() {
        eq(1, 1);
    },
    'it should also return true': function() {
        objectEq(actualObject, expectedObject);
    },
    'it should pass': function() {
        arrayEq(actualArray, expectedArray);
    }
});
