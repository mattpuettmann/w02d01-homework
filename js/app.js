console.log("Hello!");

//1. Datatypes
// A light switch that can be either on or off.
//		Boolean
//		"lightSwitchOn === true"
// A user's email address.
//		String
//		"matthewpuettmann@gmail.com"
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//		Array
//		const spaceship = [
//		hull,
//		laser blasters,
//		tractor beam
//		]
// A list of student names from our class.
//		Array
//		const students = ["Matt", "Steve", "Billy Joe", "Jim Bob"]
// A list of student names from our class, each with a location.
//		Object
//		const studentsNames = {
//			{name: 'Matt',
//			 location : 'Denver'
//			},
//			{name: 'Bill',
//			 location: 'Denver'
//			}
//		}
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
//		Object
//		const studentsNames = {
//			{name: 'Matt',
//			 location : 'Denver',
//			 favShows: ['IASIP', 'GoT', 'BB']
//			},
//			{name: 'Bill',
//			 location: 'Denver',
//			 favShows: ['Curb', 'South Park', 'Shark Tank']
//			}
//		}		



//2. Take it easy
//1. Make an array that holds all of the colors of the rainbow.
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(rainbow);
//2. Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);
//3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const mattP = {
	hometown: 'St. Louis',
	hobby: 'snowboarding',
	currentTown: 'Denver',
	favDataType: 'number'
}
//4.
console.log(mattP.hobby);

//3. Crazy Object!
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
//Use crazyObject to log the following:
// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

















