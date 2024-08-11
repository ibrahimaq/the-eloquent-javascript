/*
  Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
  For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
  The first, reverseArray, should take an array as its argument and produce a new array that has the same elements 
  in the inverse order. 

  The second, reverseArrayInPlace, should do what the reverse method does: 
  modify the array given as its argument by reversing its elements. 

  Neither may use the standard reverse method.
*/

let myArr = ['a', 'b', 'c']

const reverseArray = (arr) => {
  let reverseArr = []

  for (let i in arr) {
    reverseArr.unshift(arr[i])
  }
  return reverseArr
}

console.log(reverseArray(myArr))




let arrayValue = [1, 2, 3, 4, 5]

const reverArrayInPlace = (arr) => {
  console.log(arr)
  const isArrOdd = arr.length % 2 !== 0


  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const item = arr[i]
    const mirrorItem = arr[arr.length - 1 - i]
    arr[arr.length -1 -i] = item
    arr[i] = mirrorItem

  }
  return arr
}

reverArrayInPlace(arrayValue)

console.log('reversedArr: ', arrayValue)
