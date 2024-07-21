/*
  We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd
  by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a 
  positive whole number is even or odd:
  Zero is even.
  One is odd.
  For any other number N, its evenness is the same as N - 2.

  Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
  Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/



/*

  When the below function is passed a negative value it throws 'maximum call stack exceeded' because it 
  it infintely subtracts 2 as value will never become 0 or 1

  const isEven = (value) => {

    if (value === 1) return false
    if (value === 0) return true

    const newValue = value - 2
    return isEven(newValue)
  }

  console.log(isEven(-1))

*/

// MODIFIED to handle negatives

const isEven = (value) => {
  if (value === 1) return false
  if (value === 0) return true

  if (value < 0) return isEven(value + 2)
  
  return isEven(value -2)
}

console.log(isEven(-7))
