$(function() {
  var numbers = [1,5,10,50,100,500,1000];
  var romans = ["I", "V", "X", "L", "C", "D", "M"];
  var results = "";
  $("#roman-numerals").submit(function(event) {
  var input = parseInt($("#number").val());

 if (input > 0 && input < 4000) {
   while (input >= 1000) {
     results += "M";
     input -= 1000;
   }
   while (input >= 900) {
     results += "CM";
     input -= 900;
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
