// input: obj, obj
// output: boolean

// algo
// 1. check keys length
// 2. check every key-value, if not equal => false

function compareObjects(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  const objOne = Object.entries(object1).flat();
  const objTwo = Object.entries(object2).flat();

  return objOne.every((elem, index) => elem === objTwo[index]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj4)); // ==> true
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true