import moment from 'moment';
import lodash from 'lodash';
import momentTZ from 'moment-timezone';


momentTZ.tz.setDefault('America/Los_Angeles');
//console.log('current :', current)

// Assign targetTimeZone if it meets criteria, else throw err
let targetTimezone;

// use process.argv arguments process.argv[2] as the "timezone" you want to pass 
console.log(process.argv);

if (process.argv.length !== 3) {
  console.log( "Usage: node <script-file> <timezone>");
  // exit(1): indicates something has gone wrong 
  process.exit(1);
} else {
  targetTimezone = process.argv[2];

}

// ex: hard code a target timezone
// const targetTimezone = "Europe/Paris";
// log this call momentTz.tz() pass it targetTimezone, then format
console.log(`The ${targetTimezone} timezone is : ${momentTZ().tz(targetTimezone).format()}`);

// process[2] is the argument you want to CONVERT with moment-timezone module functions.





// https://www.youtube.com/watch?v=B047pkqRCak&list=PLqq-6Pq4lTTa-d0iZg41U2RDqECol9C5B&index=15
// const snapshot = moment().format();
// var date = new moment();
// console.log('date . date :', date.date());
// console.log('date :', date)
// console.log('moment().format() :', moment().format());

// var formatted = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
// console.log('formatted :', formatted)
// console.log(lodash.create);
// console.log("Hello World");
