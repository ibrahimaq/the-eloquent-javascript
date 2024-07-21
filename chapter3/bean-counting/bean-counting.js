console.log("running");

/*
  Write a function called countBs that takes a string as its only 
  argument and returns a number that indicates how many uppercase B characters t
  here are in the string.

  Next, write a function called countChar that behaves like countBs, except it takes 
  a second argument that indicates the character that is to be counted 
  (rather than counting only uppercase B characters). 
  Rewrite countBs to make use of this new function.
*/

const countBs = (string) => {

  let count = 0
  
  for (i = 0; i <= string.length; i++) {
    if (string[i] === 'B') count ++
  }
  
  return count
}

console.log(countBs('Bob bicycle Brazil'))

const countChar = (string, char) => {

  let count = 0
  
  for (i = 0; i <= string.length; i++) {
    if (string[i] === char) count ++
  }
  
  return count

}
console.log(countChar('Bob bicycle Brazil bbb', 'b'))