var ittyBittyTest = {
    // check to see if value exists or not
    // compare objects by value
    fail: function(msg) {
        throw new Error('Default fail.');
    },
    assert: function (valueOne, msg) {
        if (!valueOne) {
            throw new Error(msg);
        }
    },
    assertStrictEquals: function(actualValue, expectedValue) {
        if (actualValue !== expectedValue) {
            throw new Error(actualValue + ' does not equal ' + expectedValue + '.');
        }
    },
    assertArrayDeepEquals: function(actualArray, expectedArray) {
        if (!actualArray || !expectedArray) {
            throw new Error('One or both of the arguments are undefined.');
        }
        if ( !(actualArray instanceof Array) || !(expectedArray instanceof Array) ) {
            throw new Error('One or both of the arguments is not an array');
        }
        if (actualArray.length !== expectedArray.length) {
            throw new Error(actualArray + ' does not equal ' + expectedArray + '.');
        }

        for (var i = 0; i < actualArray.length; i++) {
            var currentActualVal = actualArray[i];
            var currentExpectedVal = expectedArray[i];

            if ((typeof currentActualVal === 'object') !== (typeof currentExpectedVal === 'object')) {
                throw new Error(actualArray + ' does not equal ' + expectedArray + '.');
            }
            if (typeof currentActualVal === 'object' && typeof currentExpectedVal === 'object') {
                this.assertObjectDeepEquals(currentActualVal, currentExpectedVal);
            }
            if (currentActualVal instanceof Array && currentExpectedVal instanceof Array) {

                 if ( !(this.assertArrayDeepEquals(currentActualVal, currentExpectedVal)) ) {
                     throw new Error(actualArray + ' does not equal ' + expectedArray + '.');
                 }
                 continue;

            }
            if ((typeof currentActualVal !== 'object') && (typeof currentExpectedVal !== 'object')) {
                if (currentActualVal !== currentExpectedVal) {
                    throw new Error(actualArray + ' does not equal ' + expectedArray + '.');
                }
            }
        }
        return true;
    },
    assertObjectDeepEquals: function(actualObject, expectedObject) {
        if (!actualObject || !expectedObject) {
            throw new Error('One or both of the arguments are undefined.');
        }
        if ( !(actualObject instanceof Object) || !(expectedObject instanceof Object) ) {
            throw new Error('One or both of the arguments is not an object.');
        }

        if (Object.keys(actualObject).length !== Object.keys(expectedObject).length) {
            throw new Error(actualObject + ' does not equal ' + expectedObject + '.');
        }

        for (var prop in actualObject) {
            var actualPropVal = actualObject[prop];
            var expectedPropVal = expectedObject[prop];

            if ( !expectedObject.hasOwnProperty(prop) ) {
                throw new Error(actualObject + ' does not equal ' + expectedObject + '.');
            }
            if (actualPropVal instanceof Array !== expectedPropVal instanceof Array) {
                throw new Error(actualObject + ' does not equal ' + expectedObject + '.');
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
                        throw new Error(actualObject + ' does not equal ' + expectedObject + '.');
                    }
            }
        }
        return true;
    }
}
