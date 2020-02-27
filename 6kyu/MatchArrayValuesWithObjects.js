const getAttendees = (guests, guestsResponses) => {
  // use filter map
  const declined = guestsResponses
    .filter(response => response.response === "declined")
    .map(response => response.name);
  const coming = guests.filter(guest => !declined.includes(guest));
  return coming;
};

const attending = getAttendees(
  ["Easter Bunny", "Tooth Fairy", "Frosty the Snowman", "Jack Frost"],
  [
    { name: "Easter Bunny", response: "declined" },
    { name: "Jack Frost", response: "declined" },
    { name: "Tooth Fairy", response: "accepted" }
  ]
); // => returns ['Tooth Fairy', 'Frosty the Snowman']

console.log(attending);

// let exists = Object.values(obj).includes("test1");

/* 
confirmedInvitations = []


for each guest
  check if guest exist in the array with guests responses
    if false (not responded) 
      push guest to confirmedGuests array
    if true check for response
      if accepted add name to array
return confirmedInvitations
*/

/* 

Happy Holidays fellow Code Warriors!
Santa has just revealed his master plan! His goal was to automate as many of his tasks as possible by posting them as challenges in the #hackingholidays section of Codewars. Thanks to the solutions from these challenges, Santa has completed his tasks a week before Christmas! You know what that means...Party at Santa's place! All that's left is to invite everyone. Santa sent out a large amount of invitations, and is patiently waiting for responses.

Who's attending the Party?
Write a function called getAttendees that takes two arguments:

Array containing all the names of the people Santa invited
An array of responses (objects) with the following structure:
{name: 'Easter Bunny', response: 'declined'}
getAttendees should return an array containing the names of all the people who accepted Santa's invitation and the names of those who did not respond to the invitation. Santa is very positive, so he is assuming those who did not respond will show up. Anyone who declined the invitation will not be attending the party. If nobody is attending the party, return an empty array [].

Example:
Javascript/CoffeeScript:

getAttendees( ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'] ,
   [
     {name: 'Easter Bunny', response: 'declined'},
     {name: 'Jack Frost', response: 'declined'},
     {name: 'Tooth Fairy', response: 'accepted'}
   ] );// => returns ['Tooth Fairy', 'Frosty the Snowman']
 */

// const getAttendees = (guests, guestsResponses) => {
//   const confirmedInvitations = [];

//   let values = [];
//   guestsResponses.forEach(response => {
//     values.push(Object.values(response));
//   });
//   // values = values.flat();
//   values = [].concat.apply([], values);

//   for (let index = 0; index < guests.length; index++) {
//     if (!values.includes(guests[index])) {
//       confirmedInvitations.push(guests[index]);
//     }
//   }

//   guests.forEach(guest => {
//     guestsResponses.forEach(guestResponse => {
//       if (guestResponse.name === guest) {
//         if (guestResponse.response === "accepted") {
//           confirmedInvitations.push(guest);
//         }
//       }
//     });
//   });

//   return confirmedInvitations;
// };
