// input: array, callback
// output: new array

// callback
// input: element, index (optianal), array (optioanal)
// output: boolean

// algo 
// 1. create new array
// 2. iterate array, apply callback for each element
// 3 if - true, push result to new arr

const filterArrayElements = (arr, callback) => {
  const res = [];

  for(let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const callbackRes = callback(el, index, arr);

    if(callbackRes) {
      res.push(el);
    }
  }
  return res;
};

// test
function test(el) {
  return el > 2;
}

console.log(filterArrayElements([1, 2, 3, 4, 5], test));
