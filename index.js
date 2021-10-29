import moment from 'moment';
import lodash from 'lodash';

const snapshot = moment().format();
var date = new moment();
console.log('date . date :', date.date());
console.log('date :', date)
console.log('moment().format() :', moment().format());

var formatted = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
console.log('formatted :', formatted)
console.log(lodash.create);
// console.log("Hello World");