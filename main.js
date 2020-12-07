//Row 1
const cell1 = document.getElementById("1");
const cell3 = document.getElementById("3");
const cell5 = document.getElementById("5");
const cell7 = document.getElementById("7");


//Row 2
const cell8 = document.getElementById("8");
const cell10 = document.getElementById("10");
const cell12 = document.getElementById("12");
const cell14 = document.getElementById("14");


//Row 3
const cell17 = document.getElementById("17");
const cell19 = document.getElementById("19");
const cell21 = document.getElementById("21");
const cell23 = document.getElementById("23");


//Row 4
const cell24 = document.getElementById("24");
const cell26 = document.getElementById("26");
const cell28 = document.getElementById("28");
const cell30 = document.getElementById("30");


//Row 5
const cell33 = document.getElementById("33");
const cell35 = document.getElementById("35");
const cell37 = document.getElementById("37");
const cell39 = document.getElementById("39");


//Row 6
const cell40 = document.getElementById("40");
const cell42 = document.getElementById("42");
const cell44 = document.getElementById("44");
const cell46 = document.getElementById("46");


//Row 7
const cell49 = document.getElementById("49");
const cell51 = document.getElementById("51");
const cell53 = document.getElementById("53");
const cell55 = document.getElementById("55");


//Row 8
const cell56 = document.getElementById("56");
const cell58 = document.getElementById("58");
const cell60 = document.getElementById("60");
const cell62 = document.getElementById("62");




//Red Checkers
const rC1 = document.getElementById("Red-1");
const rC2 = document.getElementById("Red-2");
const rC3 = document.getElementById("Red-3");
const rC4 = document.getElementById("Red-4");
const rC5 = document.getElementById("Red-5");
const rC6 = document.getElementById("Red-6");
const rC7 = document.getElementById("Red-7");
const rC8 = document.getElementById("Red-8");
const rC9 = document.getElementById("Red-9");
const rC10 = document.getElementById("Red-10");
const rC11 = document.getElementById("Red-11");
const rC12 = document.getElementById("Red-12");



//Black Checkers
const bC1 = document.getElementById("Black-1");
const bC2 = document.getElementById("Black-2");
const bC3 = document.getElementById("Black-3");
const bC4 = document.getElementById("Black-4");
const bC5 = document.getElementById("Black-5");
const bC6 = document.getElementById("Black-6");
const bC7 = document.getElementById("Black-7");
const bC8 = document.getElementById("Black-8");
const bC9 = document.getElementById("Black-9");
const bC10 = document.getElementById("Black-10");
const bC11 = document.getElementById("Black-11");
const bC12 = document.getElementById("Black-12");



let occupC1 = [cell1, true, rC1];
let occupC3 = [cell3, true, rC2];
let occupC5 = [cell5, true, rC3];
let occupC7 = [cell7, true, rC4];

let occupC8 = [cell8, true, rC5];
let occupC10 = [cell10, true, rC6];
let occupC12 = [cell12, true, rC7];
let occupC14 = [cell14, true, rC8];

let occupC17 = [cell17, true, rC9];
let occupC19 = [cell19, true, rC10];
let occupC21 = [cell21, true, rC11];
let occupC23 = [cell23, true, rC12];

let occupC24 = [cell24, false, null];
let occupC26 = [cell26, false, null];
let occupC28 = [cell28, false, null];
let occupC30 = [cell30, false, null];

let occupC33 = [cell33, false, null];
let occupC35 = [cell35, false, null];
let occupC37 = [cell37, false, null];
let occupC39 = [cell39, false, null];

let occupC40 = [cell40, true, bC12];
let occupC42 = [cell42, true, bC11];
let occupC44 = [cell44, true, bC10];
let occupC46 = [cell46, true, bC9];

let occupC49 = [cell49, true, bC8];
let occupC51 = [cell51, true, bC7];
let occupC53 = [cell53, true, bC6];
let occupC55 = [cell55, true, bC5];

let occupC56 = [cell56, true, bC4];
let occupC58 = [cell58, true, bC3];
let occupC60 = [cell60, true, bC2];
let occupC62 = [cell62, true, bC1];

bC10.addEventListener("click", function() {
  if(occupC37[1]===false){
    cell37.addEventListener("click", function() {
      cell37.append(bC10);
    });
  }
});
