// Race Day - Bib number and start time generator
// Adults >18y/o who registered early get bib #s >1000 and start at 9:30am
// Late adults and youth get bib numbers <1000.  Late adults start at 11:00am and all youth start at 12:30pm

let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true

let age = 18

if (earlyReg && age>18) {
  raceNumber+=1000
}
if (earlyReg && age>18) {
  console.log(`Your bib number is ${raceNumber}.  Early adults begin at 9:30am.`)
} else if (!earlyReg && age>18) {
  console.log(`Your bib number is ${raceNumber}.  Late adults run at 11:00am.`);
} else if (age<18) {
  console.log(`Your bib number is ${raceNumber}.  Youth registrants run at 12:30pm.`);
} else if (age=18) {
  console.log('Please see the registration desk.')
}