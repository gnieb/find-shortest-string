// given an array of strings, find the shortest string. if there is more than one with the same legnth, 
// return the FIRST string

// re-write the question :
// find the string with the least amount of characters; the shortest length.
// if there are two the same length, give the first one, or the one with the lower index.

// maybe create a variable that will be the string with the shortest length so far
// start the value of the shortest legnth at something ridiculous like 10000 and loop through the array. and compare each to the variable 
// if it's shorter, replace the variable
// at the end, return the variable



function findShortestString(arr) {
  let shortestString = ''
  let shortestLength = 10000
  let i = 0
  while (i < arr.length) {
    if (arr[i].length < shortestLength) {
      shortestString = arr[i]
      shortestLength = arr[i].length
    }  
    i += 1
  }
  return shortestString
}

if (require.main === module) {
  // add your own tests in here 
  
  console.log("Expecting: 'hi' ")
  console.log("=>", findShortestString(['hello', 'oh hey', 'hi', 'hola', 'hiiiiii']) )


  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//i declared a variable to keep track of the length of the shortest string so far, assigning it to a very large number

// then I declared a variable as an empty string to keep track of the string that had the shortest length so far.

// We then loop through the array as long as i, which starts at 0 is less than the length of the array because i represents the index

// Each string in the array goes through the loop. if the length of the string is less than the shortestLength variable, we replace the shortest string variable with that string, and the shortestLength becomes the length of that string. we continue until all the way through the loop and return the final value of the shortestString variable. 

// If there are two strings of the same length, the string with the lower index will be returned because the second string will NOT replace the the variable value because it is NOT < the length of the string ( nthey are equal)

