/**
 * !Basic Instruction
 * 
 * _Read The Problem carefully First
 * _Research The Problem
 * _Analysis The Problem
 * _Think Problem Into The Smaller Terms
 * _Pseudo Code
 * _Compile The Code Into Brain
 * _Submit The Code
 * 
 */

//*_Problem: List Filtering!
/**
 *  create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/ 

// Way: 1
const values = [1,2,'aasf','1','123',123]

function filter_list(l) {
    return l.filter(x => typeof x === "number");
}
// console.log(filter_list(values))


// Way: 2
function filter_list(l) {
  // Return a new array with the strings filtered out
  var filteredList = [];
  for (var i = 0; i < l.length; i++){
    if (l[i].constructor.name !== "String"){
      filteredList.push(l[i]);
    }
  }
  return filteredList;
}
// console.log(filter_list(values))


// Way: 3
function filter_list(arr) {
  return arr.filter(function(item) {
    return typeof(item) == 'number';   
  });
}
// console.log(filter_list(values))