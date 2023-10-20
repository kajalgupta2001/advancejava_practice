let family = {
    name: "raam",
    age: 98,
    child: [
      {
        id: 1001,
        name: "anand",
        age: 44,
        occupation: "businessman",
        vehicle: [
          {
            name: "honda",
            number: 5040,
          },
          {
            name: "suzuki",
            number: 10130,
          },
        ],
  
        son: [
          {
            name: "hariom",
            age: 23,
          },
          {
            name: "krishna",
            age: 25,
          },
        ],
      },
      {
        id: 1002,
        name: "govind",
        age: 38,
        occupation: "businessman",
        vehicle: [
          {
            name: " hero-honda",
            number: 50320,
          },
          {
            name: "suzuki",
            number: 10122,
          },
        ],
  
        son: [
          {
            name: "om",
            age: 20,
          },
          {
            name: "radha",
            age: 18,
          },
        ],
      },
      {
        id: 1003,
        name: "jagdish",
        age: 44,
        occupation: "businessman",
        vehicle: [
          {
            name: "aeroo",
            number: 5040,
          },
          {
            name: "suzuki",
            number: 10130,
          },
        ],
  
        son: [
          {
            name: "om",
            age: 23,
          },
          {
            name: "vishnu",
            age: 25,
          },
        ],
      },
    ],
  };
  
  // // vehicle details of each family member
  // let vehicleNames = [];
  
  // for (let i = 0; i < family.child.length; i++) {
  //   for (let j = 0; j < family.child[i].vehicle.length; j++) {
  //     vehicleNames.push(family.child[i].vehicle[j]);
  //   }
  // }
  
  // console.log(vehicleNames);
  
  // console.log("vehicle details of each family member");
  // function fun() {
  //     let vec=family.child.filter((e)=>{
  //             // console.log(e);
  //             return e?.vehicle
  //     })
  //     // console.log("vec:", vec)
  //       let vec2 =vec.filter((e)=>{
  //         console.log(e?.vehicle);
  //       })
  // }
  //  fun()
  
  // // -> all son of your dada name only
  // let sonNames = [];
  // for (let i = 0; i < family.child.length; i++) {
  //   sonNames.push(family.child[i].name);
  // }
  // console.log(sonNames);
  
  // -> all son of father/uncle's
  let sonNames1 = [];
  for (let i = 0; i < family.child.length; i++) {
    for (let j = 0; j < family.child[i].length; j++) {
      sonNames1.push(family.child[i].child[j].name);
    }
  }
  console.log(sonNames1);
  