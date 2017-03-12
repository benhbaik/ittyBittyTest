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
        if ( !(actualArray instanceof Array) || !(expectedArray instanceof Array) ) {
            throw new Error('One or both of the arguments is not an array');
        }
        if (actualLength !== expectedLength) {
            return false;
        }

        for (var i = 0; i < actualLength; i++) {
            var currentActualVal = actualArray[i];
            var currentExpectedVal = expectedArray[i];

            if ((typeof currentActualVal === 'object') !== (typeof currentExpectedVal === 'object')) {
                return false;
            }
            if (typeof currentActualVal === 'object' && typeof currentExpectedVal === 'object') {
                this.assertObjectDeepEquals(currentActualVal, currentExpectedVal);
            }
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
    assertObjectDeepEquals: function(actualObject, expectedObject) {
        var actualLength;
        var expectedLength;

        if (!actualObject || !expectedObject) {
            throw new Error('One or both of the arguments are undefined.');
        }
        if ( !(actualObject instanceof Object) || !(expectedObject instanceof Object) ) {
            throw new Error('One or both of the arguments is not an object.');
        }

        actualLength = Object.keys(actualObject).length;
        expectedLength = Object.keys(expectedObject).length;

        if (actualLength !== expectedLength) {
            return false;
        }

        for (var prop in actualObject) {
            var actualPropVal = actualObject[prop];
            var expectedPropVal = expectedObject[prop];

            if ( !expectedObject.hasOwnProperty(prop) ) {
                return false;
            }
            if (actualPropVal instanceof Array !== expectedPropVal instanceof Array) {
                return false;
            }
            if (actualPropVal instanceof Array && expectedPropVal instanceof Array) {
                this.assertArrayDeepEquals(actualPropVal, expectedPropVal);
            }


            switch (typeof actualPropVal) {
                case 'object':
                    if ( !(this.assertObjectDeepEquals(actualPropVal, expectedPropVal)) ) {
                        return false;
                    }
                    break;
                case 'function':
                    if ( (actualPropVal.toString() !== expectedPropVal.toString()) ) {
                        return false;
                    }
                    break;
                default:
                    if (actualPropVal !== expectedPropVal) {
                        return false;
                    }
            }
        }
        return true;
    }
}
