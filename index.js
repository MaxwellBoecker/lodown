'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns the given value unchanged
 * 
 * @param {Value} value: Input value can be any datatype
 * 
 * @return {Value}: The value returned will be the same as the input value, unaltered
 */

function identity(value){
    return value;
}
module.exports.identity = identity;



/** typeOf: The typeOf function takes one parameter and returns the data type of the 
 * argument. 
 * 
 * @param {string, array, object, undefined, number, boolean, null, function} value: the value
 * whose type we will determine
 * 
 * @return {string} returns a string listing the data type of value
 *
 */
 
 function typeOf(value){
    if(typeof value !== 'object'){
        return typeof value;
    }else if(Array.isArray(value) === true){
        return 'array';
    }else if(value === null){
        return 'null';
    }else{
        return typeof value;
    }
    
}
module.exports.typeOf = typeOf;




/** First: The first function takes two parameters, an array and a number. It returns the number
 * of elements from the array as specified by the number starting from index 0.
 * 
 * @param {array} array: The array from which we'll extract elements
 * 
 * @param {number} number: The number which specifies how many elements to extract
 * 
 * @return{simple data type}{array} returns a simple data type if only returning one item. Returns an array
 * of elements if more than one item is returned. Edge Cases include: If no number is given or the given argument
 * for number is not a number, we return the first element in the array; if the given number exceeds the total indexes
 * in the array we return the full array; if the argument for array is not given or if it is not an array we return
 * an empty array.
 * 
 */
 
function first(array, number){
    
    if(!Array.isArray(array)){
        return [];
    }else if(number === undefined || isNaN(number)=== true){
        return array[0];  
    }else{
        var myArray = [];
        for(let i = 0; i < number && i < array.length; i ++){
            
            myArray.push(array[i]);
            
        }
    }return myArray;
}
module.exports.first = first;


/** Last: This function takes two parameters, an array and a number. It returns the number of 
 * elements from the array as specified by the number starting from array.length - number and
 * including the last element in the array.
 * 
 * @param {array} array: The array from which we'll extract elements
 * 
 * @param {number} number: The number of elements to extract
 * 
 * @return {simple data type}{array} Returns a simple data type if returning only one element, otherwise
 * returns an array of elements. Edge Cases include: If the number given is greater than the total indexes in the array
 * then we return the full array. If no number is given, or the argument given for the number parameter
 * is not a number, we return the last element in the array. If no array is given 
 * or the value given for array is not an array, we return an empty array.
 * 
 */
 
function last(array, number){
    if(!Array.isArray(array)){
        return [];
    }else if(number === undefined || isNaN(number)=== true){
        return array[array.length - 1];  
    }else if(number > array.length){
        return array;
    }else{
        var myArray = [];
        for(let i = array.length - number; i < array.length; i ++){
            
            myArray.push(array[i]);
            
        }
    }return myArray;
}

module.exports.last = last;

/** indexOf:The indexOf function loops over an array to find an instance of a given value
 * within the array if it exists.
 * 
 * @param {array} array: The array in which we'll be searching for the given value
 * 
 * @param {any data type} value: The function is built to handle finding any data type. for simple data types it will compare the value.
 * For complex it will compare the reference number.
 * 
 * @return {number} If value has successfully been located in array then the index of location is returned.
 * Otherwise if the value has not been located the value -1 is returned.
 * 
 * 
 */
 
function indexOf(array, value){
    for(let i = 0; i < array.length; i ++){
        if(array[i] === value){
            return i;
        }
    }return -1;
}
 
module.exports.indexOf = indexOf;
 
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {array or object} collection: The collection over which to iterate.
 * 
 * @param {function} action: The Function to be applied to each value in the 
 * collection
 * 
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/** 
 * unique: Given an array it returns the array with all the duplicates removed
 * 
 * @param {array} array: the array from which to remove duplicates
 * 
 * @return {array} an array with all duplicates removed
 */
function unique(array){
    var newArray = [];
    for(let i = 0; i < array.length; i++){
        if(indexOf(newArray, array[i]) === -1){
            newArray.push(array[i]);
        }
    }return newArray;
}
module.exports.unique = unique;

/** filter: Given an array and a function, filter will call the function for each element with the arguments
 * array[i], i, array and return only the elements which, when given as an argument to the function, resulted in
 * the function returning true.
 * 
 * @param {array} array: the list of values to call the function on
 * 
 * @param {func}: function: will be called with three arguments for each element of array. returns a boolean value
 * 
 * @return {array} an array of the elements which, when given as an argument to the function, reulted in the function returning true
 */

function filter(array, func){
    let newArray = [];
    for(let i = 0; i < array.length; i ++){
        if(func(array[i], i, array) === true){
            newArray.push(array[i]);
        }
    }return newArray;
}

module.exports.filter = filter

/** reject: given an array and a function it will pass the function to filter and return an array of elements
 * which, for the function call in filter, returned false. It is the logical opposite of filter
 * 
 * @param {array} array: The array of elements that function will test with the filter function
 * 
 * @param {func} function: The function that is called by filter to return a boolean value
 * 
 * @return {array} an array of the elements which, when given as an argument to the function, resulted in the function returning false
 */
 
 function reject(array, func){
    var myArray = [];
    var newArray = filter(array, func);
    for(let i = 0; i < array.length; i++){
        if(indexOf(newArray, array[i]) === -1){
            myArray.push(array[i]);
        }
    }return myArray;
}

module.exports.reject = reject

/** partition: given an array and a function, partition calls the function for each element in the array with three arguments
 * and pushes the elements with which calling the function returned true into one array and pushes the elements with which 
 * calling the function returned false into another array. It returns an array of the two arrays
 * 
 * @param {array} array: the array of the elements with which use as the arguments for the function during function call.
 * 
 * @param {function} func: The function takes array[i], i, array as arguments at function call and returns a boolean value.
 * 
 * @return {array} an array containing two arrays, one of elements which when passed to the function returned true and one of
 * elements that returned false
 */
 
 function partition(array, func){
    let totalArray = [];
    let tArray = [];
    let fArray = [];
    for(let i = 0; i < array.length; i++){
    if(func(array[i], i, array) === true){
        tArray.push(array[i]);
    }else if(func(array[i], i, array) === false){
        fArray.push(array[i]);
    }
    }totalArray.push(tArray, fArray);
    return totalArray;
}

module.exports.partition = partition

/** map: given a collection and a function, map will first determine which type of collection is given, array or object, 
 * and then call the function with each element of the collection returning an array of the elements as modified by function.
 * 
 * @param {array}{object} collection: the collection of elements to be modified
 * 
 * @param {function} func: the function which specifies how the elements will be modified
 * 
 * @return {array} newArray: the array of elements modified
 * 
 */
 
 function map(collection, func){
    var newArray = [];
    if(typeOf(collection) === 'array'){
        for(let i = 0; i < collection.length; i++){
            newArray.push(func(collection[i], i, collection));
        }
    }else if(typeOf(collection) === 'object'){
        for(var key in collection){
            newArray.push(func(collection[key], key, collection));
        }
    }return newArray;
}

module.exports.map = map


/** pluck: given an array of objects and a property, pluck returns the value at each property in each object.
 * pluck passes the array to map as well as providing it with the helper function which tells map to return
 * the value at the given object property.
 * 
 * @param {array} array: an array of objects
 * 
 * @param {string} prop: the key at which we will find the values that map needs to put in the returned array
 * 
 * @return {array} array: map returns an array of values acording to its own hard-coding, the helper function
 * modifies the first parameter
 */

function pluck(array, prop){
    var newArray= [] ;
    function fun(a, b, c){
        return a[prop];
    }
    return map(array, fun)
    
    
}

module.exports.pluck = pluck


/** every: every takes a collection and a function as inputs. It determines if the collection is an array or an object, then
 * calls a function for every element with the arguments collection[i] or collection[key], i/key, collection. If no function calls return
 * the value false, we return true from the every function. If even one function call returns false then we return false from the function.
 * 
 * @param {array}{object} collection: This is the array that is passed to the function
 * 
 * @param {function} func: this function is called for every value of collection with the arguments specified above. It returns a boolean value
 * 
 * @result {boolean} based on the results of the function calls every will either return true or false.
 * 
 */
 
 function every(collection, func){
    if(Array.isArray(collection)){
       
        for(let i = 0; i < collection.length; i++){
            if(func === undefined){
                if(collection[i] == false){
                    return false;
                }
                    return true;
                
            }
            else if(func(collection[i], i, collection) === false){
               return false; 
            }
        }
    }else if(typeof collection === 'object'){
        for(var key in collection){
            if(func === undefined){
                if(collection[key] == false){
                   return false; 
                }return true;
            }
            else if(func(collection[key], key, collection) === false){
              return false; 
            }
        }
    }return true;
}

module.exports.every = every


/** some: the some function takes a collection and a function as arguments. It determines whether the
 * collection is an array or an object and then calls the function for every element/value of collection with
 * the arguments collection[i]/collection[key], i/key, and collection. If any true value is returned from the function calls
 * then the some function will return true. If all function calls result in false returns, then false is returned from some.
 * 
 * @param {array}{object} collection: The collection which supplies all of the arguments for the internal function calls
 * 
 * @param {function} func: The function which takes three arguments as specified above and either returns true or false
 * 
 * @result {boolean} the some function either returns true or false
 * 
 * 
 */

function some(collection, func){
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i ++){
            if(func === undefined){
                if(collection[i] == true){
                    return true;
                }return false;
            }else{
                if(func(collection[i], i, collection) === true){
                    return true;
                }
            }
        }return false;
    }else if(typeof collection === 'object'){
        for(let key in collection){
            if(func === undefined){
                if(collection[key] == true){
                    return true;
                }return false;
            }else{
                if(func(collection[key], key, collection) === true){
                    return true;
                }
            }
        }return false;
    }
}

module.exports.some = some

/** reduce: reduce has three parameters, one for an array, one for a function, and one for a seed. for every element
 * in the array we call the given function with the previous result, the array element, and the index. It returns a single
 * value that is the result of calling the function on each array element. If no previous result exists(as at 1st call), then we 
 * use seed as the initial value to start from. If seed is not given, we assign the first value in the array to seed and proceed to 
 * the next array element.
 * 
 * @param {array} array: the array which provides the elements
 * 
 * @param {function} func: the function given to perform operations on each array element
 * 
 * @param {number/simple data type} seed: the value to start from on 1st function call
 * 
 * @result {number/simple data type} the result of all the function calls.
 * 
 */
 
 function reduce(array, func, seed){
    var result;
    for(let i = 0; i < array.length; i++){
        if(result !== undefined){
            result = func(result, array[i], i)
        }else if(seed !== undefined){
            result = func(seed, array[i], i)
        }else{
            var seed = array[0];
        }
    }  return result;
}

module.exports.reduce = reduce

/** extend: the extend function takes an object and an array of objects(length unspecified) and copies the key/value
 * pairs from all the objects found in array to the first given object. It then returns that object.
 * 
 * @param {object} object1: the first given object onto which the values from the other objects will be copied
 * 
 * @param {objects} ...object: any number of objects grouped together in the array object from which we will copy values onto the first object
 * 
 * @return {object} the first object with all added/modified values
 * 
 */

function extend(object1, ...object){
    
    
    for(let i = 0; i < object.length; i++){
        for(var key in object[i]){
            object1[key] = object[i][key];
        }
    }return object1;
    
}

module.exports.extend = extend











