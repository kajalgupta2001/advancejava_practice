// // 1. import data from json
let data = require("./data.json")
console.log("data:", data)


// // 2. give all city name of state which one give by user

//  function getcity(state) {             
//     let filterdata= data.filter((e)=>{
//          return e?.state_name ===state;
        
//      })
//      let cityfill=filterdata.map((e)=>{
//          return e.city
//      })
//       return cityfill
//  }
//  let city1= getcity("Gujarāt")
// //  console.log("city1:", city1)


// //  3. give all city name , which have more character than user given input

// function city(params) {
//     let cityname=data.map((e)=>{
//         return e.city
//     })
//     //  console.log("cityname:", typeof cityname)
//     let cityshow=cityname.filter((e)=>{
//         return e.length>15
//     }) 
//     // console.log("cityshow:", cityshow)  
// }
//  city()

// //  4. city list which has population more then user give

// function citybypopulation(populations) {
//     let populationfill=data.filter((e)=>{
//         // Number(populations)
//         return e.population >populations;
//     })
   
   
//     let citynamebypopulation=populationfill.map((e)=>{
//         return e?.city;  
//     })
//     return citynamebypopulation;
// }
// let cityn1=citybypopulation(10000000)
// // console.log("cityn1:", cityn1)


// // 5. acending decending population wise

// let arr =[];
// data.map((object)=>{
//     let index=arr.findIndex((ife)=>ife.state===object.state_name);
//     if(index===-1){
//         arr.push({
//             state:object.state_name,
//             population:+object.population
//         })
//     }else{
//         arr[index].population+= +object.population
//     }
// })
// // console.log("arr:", arr)
// let  acending= arr.sort((a,b)=>{
//     return b.population-a.population
// })
// // console.log("acending:", acending)
// let decending=acending.sort((a,b)=>{
//     return a.population-b.population
// })
// // console.log("decending:", decending)


// // 6. top 5 city population wise [only name of city]


// let arr1 =[];
// data.map((object)=>{
//     let index=arr1.findIndex((ife)=>ife.city===object.city);
//     if(index===-1){
//         arr1.push({
//             city:object.city,
//             population:+object.population
//         })
//     }else{
//         arr1[index].population+= +object.population
//     }

// })
// let y=arr1.sort((a,b)=>{
//     return b.population-a.population
// })
// // console.log(" y:", y)
// // console.log("arr1:", arr1)
//  let x=y.map((e)=>{
//     return e.city
//  })
//  let print=x.slice(0,5)
// //  console.log("print:", print)

// //  7. give total populatin of state which give by user
 

// function fun1(man) {
//     let x=data.filter((e)=>{
//         return e.state_name===man 
//     })
//     // console.log("x:", x)
//     if(x){
//         return x.filter((e)=>{
//             return e
//         })
//     }else{
//         return "not present"
//     }
// }
// let z= fun1("Mahārāshtra")
// // console.log("z:", z)

// let show=z.map((e)=>{
//     return +e.population
// })

// let total=show.reduce((last,e)=>{
//     return last+e
// },0)
// // console.log("show:", show)
// // console.log("total:", total)

// // 8. give top 5 state name population wise 


// let arr2 =[];
// data.map((object)=>{
//     let index=arr2.findIndex((ife)=>ife.state===object.state_name);
//     if(index===-1){
//         arr2.push({
//             state:object.state_name,
//             population:+object.population
//         })                                
//     }else{
//         arr2[index].population+= +object.population
//     }
// })
// // console.log("jdata.map ~ arr:", arr)

// let  acending1= arr2.sort((a,b)=>{
//     return b.population-a.population
// })
//  let show1=acending1.map((e)=>{
//     return e.state
//  })
// //  console.log("show1 ~ show1:", show1)

// let print1=show1.slice(0,5)
// // console.log("print1:", print1)













   



