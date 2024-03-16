function sayMyName() {
  console.log('Hello');
}

//sayMyName()

// function AddTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// function AddTwoNumbers(num1, num2) {
//   let result = num1 + num2
//   return result
// }

// const result = AddTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter user name");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("Samim"))
// console.log(loginUserMessage('samim'))

function calculateCartPrice(val1, val2, ...num1) {
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "Samim",
  prices: 199
}

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
  username: "Sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
  return getArray[1]
}

console.log(returnSecondValue([200, 400, 100, 600]));