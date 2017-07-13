$(function() {

  $("#roman-numerals").submit(function(event) {
  var input = parseInt($("#number").val());

 if (input > 0 && input < 4000) {
   var numbers = [1,5,10,50,100,500,1000];
   var romans = ["I", "V", "X", "L", "C", "D", "M"];
   var results = "";
   while (input >= 1000) {
     results += "M";
     input -= 1000;
   }
   while (input >= 900) {
     results += "CM";
     input -= 900;
   }
   while (input >= 500) {
     results += "D";
     input -= 500;
  }
  while (input >= 400) {
    results += "CD";
    input -= 400;
  }
   while (input >= 100) {
    results += "C";
    input -= 100;
  }
  while (input >= 90) {
    results += "LC";
    input -= 90;
  }
  while (input >= 50) {
    results += "L";
    input -= 50;
  }
  while (input >= 40) {
    results += "XL";
    input -= 40;
  }
  while (input >= 10) {
    results += "X";
    input -= 10;
  }
  while (input >= 9) {
    results += "IX";
    input -= 9;
  }
  while (input >= 1) {
    results += "I";
    input -= 1;
  }
  alert(results);
 }

event.preventDefault();
  });
});

// for (var i = 0; i < numbers.length; i++) {
//   if (input === numbers[i]) {
//     numbers[i] = romans[i];
//     alert(romans[6]);
// } else if (input !== numbers[i]) {
//   numbers[i]++
