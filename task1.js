let currentdate =new Date();
console.log("currentdate",currentdate);

let month=[
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];

let weekday=[
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];


if((weekday[0]="sunday")){
    weekday[0]="today is funday";
}
console.log("current:", currentdate.getDate());

let munthnum = currentdate.getMonth();
let daynum = currentdate.getDay();
let dd = currentdate.getDate();
let mm = currentdate.getMonth();
let yy = currentdate.getFullYear();

let y = dd + " " + month[munthnum] + " " + yy + " and " + weekday[daynum];

console.log(y)