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

let row1, row2, row3, row4, row5, row6, row7, row8;

let occupC1 = [cell1, rC1, row1];
let occupC3 = [cell3, rC2, row1];
let occupC5 = [cell5, rC3, row1];
let occupC7 = [cell7, rC4, row1];

let occupC8 = [cell8, rC5, row2];
let occupC10 = [cell10, rC6, row2];
let occupC12 = [cell12, rC7, row2];
let occupC14 = [cell14, rC8, row2];

let occupC17 = [cell17, rC9, row3];
let occupC19 = [cell19, rC10, row3];
let occupC21 = [cell21, rC11, row3];
let occupC23 = [cell23, rC12, row3];

let occupC24 = [cell24, null, row4];
let occupC26 = [cell26, null, row4];
let occupC28 = [cell28, null, row4];
let occupC30 = [cell30, null, row4];

let occupC33 = [cell33, null, row5];
let occupC35 = [cell35, null, row5];
let occupC37 = [cell37, null, row5];
let occupC39 = [cell39, null, row5];

let occupC40 = [cell40, bC12, row6];
let occupC42 = [cell42, bC11, row6];
let occupC44 = [cell44, bC10, row6];
let occupC46 = [cell46, bC9, row6];

let occupC49 = [cell49, bC8, row7];
let occupC51 = [cell51, bC7, row7];
let occupC53 = [cell53, bC6, row7];
let occupC55 = [cell55, bC5, row7];

let occupC56 = [cell56, bC4, row8];
let occupC58 = [cell58, bC3, row8];
let occupC60 = [cell60, bC2, row8];
let occupC62 = [cell62, bC1, row8];

bC10.addEventListener("click", function() {
  if(occupC37[1] === null){
    cell37.addEventListener("click", function() {
      cell37.append(bC10);
      occupC37[1]= bC10;
      occupC44[1]= null;
    });
  }
});
