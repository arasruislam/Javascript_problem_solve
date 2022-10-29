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

//*_Problem: Friend or Foe?!
/**
 * Make a program that filters a list of strings and returns a list with only your friends name in it.
 * If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
 * Must be return in string! not number
 * */

// Way: 1
function friend(friends){
    return friends.filter(x => x.length === 4);
}
// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// Way: 2
function friend(friends) {
    let i = 0;
    let len = friends.length;
    let myFriend = [];

    for (; i < len;) {
        if (friends[i].length === 4 && isNaN(friends[i])) {
            myFriend.push(friends[i]);
        }
        i++
    }

    return myFriend;
}
// console.log(friend(["Ryan", "Kieran", "Jason", "Yous", "Asru", "Ar Asru"]));