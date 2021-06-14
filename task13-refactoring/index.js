// const withdraw = (clients, balances, client, amount) => {
//   //put your code here
//   let clientBalances = balances[clients.indexOf(client)];
//   if (amount <= clientBalances) {
//     clientBalances -= amount;
//     balances[clients.indexOf(client)] = clientBalances;
//     return clientBalances;
//   } else {
//     return -1;
//   }
// };

const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  if (balances[index] < amount) {
    return -1;
  }

  balances[index] -= amount;
  return balances[index];
};


// option 2
// very bad
// const withdraw = (clients, balances, client, amount) => {
//   let rest = 0;

//   // don't use
//   clients.forEach((name, index) => {
//     // very good
//     if (name === client) {
//       rest = balances[index] - amount;
//     }
//   });
//   if (rest < 0) {
//     return -1;
//   }
//   return rest;
// };



//example 1:

//input
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50));
const bal = [1400, 87, -6];
console.log(bal);