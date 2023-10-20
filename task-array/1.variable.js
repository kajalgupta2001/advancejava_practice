/*
-> Want to re-use variable name so which variable declare method should i use
    ans:var
------------------------------------------------------------------------------------------

-> give the list which variable name not works in js
1. let a=0
2. let "a"=0
3. let 'a'=0
4. let `10`=0
5. let 1=0

ans:2,3,4,5
------------------------------------------------------------------------------------------

let x = 100
var y = 100
const z = 100
const m
{
      x= 90
      y= 90
      z= 90
      console.log(x) _________90__________ point-x1
      console.log(y) __________90_________ point-y1
      console.log(z) __________100_________ point-z1
      console.log(m) ___________________  ponit-m1
} 

console.log(x) ______90_____________ point-x2
console.log(y) ___________90________ point-y2
console.log(z) ___________100________ point-z2

what will print at x1-____90___
what will print at y1-____90___
what will print at z1-______100_
what will print at m1 ____m is not defined__
what will print at x2-_______90
what will print at y2-_______90
what will print at z2-_______100
 
------------------------------------------------------------------------------------------

-> task-2

console.log(x) ______Cannot access 'x' before initialization_____________ point-x2
console.log(y) _________undefined__________ point-y2
console.log(z) ___________________ point-z2

{
      let x = 100
      var y = 100
      const z = 100
}

console.log(x) _____100______________ point-x1
console.log(y) ________100___________ point-y1
console.log(z) ___________________ point-z1


what will print at x1-___100____
what will print at y1-____100___
what will print at z1-___100____
what will print at x2-__Cannot access 'x' before initialization_______
what will print at y2-____undefined___
what will print at z2-___z is not defined____
*/