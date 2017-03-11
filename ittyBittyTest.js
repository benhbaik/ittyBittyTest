var ittyBittyTest = {
    // check to see if value exists or not
    // compare objects by value
    fail: function(msg) {
        throw new Error('Default fail.');
    },
    assertStrictEquals: function(actualValue, expectedValue) {
        if (actualValue !== expectedValue) {
            throw new Error(actualValue + ' does not equal ' + expectedValue + '.');
        }
    },
    assertArrayDeepEquals: function(actualArray, expectedArray) {
        var actualLength = actualArray.length;
        var expectedLength = expectedArray.length;

        if (!actualArray || !expectedArray) {
            throw new Error('One or both of the arguments are undefined.');
        }
        if (!(actualArray instanceof Array) || !(expectedArray instanceof Array)) {
            throw new Error('One or both of the arguments is not an array');
        }
        if (actualLength !== expectedLength) {
            return false;
        }

        for (var i = 0; i < actualLength; i++) {
            var currentActualVal = actualArray[i];
            var currentExpectedVal = expectedArray[i];

            if (currentActualVal instanceof Array && currentExpectedVal instanceof Array) {

                 if ( !(this.assertArrayStrictEquals(currentActualVal, currentExpectedVal)) ) {
                     return false;
                 }
                 continue;

            }
            if (currentActualVal !== currentExpectedVal) {
                return false;
            }
        }
        return true;
    },
    assertObjectDeepEquals: function() {

    }
}
