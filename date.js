// function date(a) {
//   return /^([0-9]{4}-((0[0-9])|(1[0-2]))-(([0-2][1-9])|(3[0-1])))$/g.test(a);
// }

// console.log(slug(" Attention en dessous"));

function date(a) {
  let treat = a.split("/").reverse().join("-");

  return new Date(treat) == "Invalid Date" ? false : true;
}
export default date;

// function date(a) {
//   let treat = a.split("/").reverse().join("-");

//   return new Date(treat) == "Invalid Date" ? false : true;
// }

//console.log(date("30/02/1930"));
