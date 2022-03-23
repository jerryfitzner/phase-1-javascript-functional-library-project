
//Checks  if array. If array, returns array. If object, converts to array.
function convert(collection){
  if (Array.isArray(collection) === true) {
    return collection;
  } else {
    return Object.values(collection);
  }
}

// Test to see if convert function is working. 

// const object = { one: 1, two: 2, three: 3, four: 4 }
// const array = [ 1, 2, 3, 4]
// console.log(convert(array));
// console.log(convert(object));

function myEach(collection, callback){
  const arrayCollection = convert(collection);
  // console.log(collection)
  // collection.forEach(num => callback(num));
  arrayCollection.forEach(num => callback(num));
  // return collection;
  return collection;
}

function myMap(collection, callback){
  const arrayCollection = convert(collection);
  return arrayCollection.map(num => callback(num));
}

function myReduce(collection, callback, acc){
  const arrayCollection = convert(collection);
  // console.log(reducer);
  if(Number.isInteger(acc)){
    const reducer = arrayCollection.reduce((prevVal, curVal) => prevVal + curVal);
    return callback(acc, reducer);
  } else {
    const newArray = arrayCollection.slice(1);
    const reducer = newArray.reduce((prevVal, curVal) => prevVal + curVal);
    return callback(arrayCollection[0], reducer);
  }
}

function myFind(collection, predicate){
  const arrayCollection = convert(collection);
  return arrayCollection.find(num => predicate(num));
}

function myFilter(collection, predicate){
  const arrayCollection = convert(collection);
  return arrayCollection.filter(num => predicate(num));
}

function mySize(collection){
  const arrayCollection = convert(collection);
  return arrayCollection.length;
}

function myFirst(array, n){
  if (n === undefined){
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n){
  if (n === undefined){
    return array[array.length - 1];
  } else {
    return array.slice(array.length - n, array.length);
  }
}

//mySortBy

//myFlatten

function myKeys(object){
 return Object.keys(object);
}

function myValues(object){
  return Object.values(object);
}