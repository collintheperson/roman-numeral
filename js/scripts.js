$(function() {
  var numbers = [1,5,10,50,100,500,1000];
  var romans = ["I", "V", "X", "L", "C", "D", "M"];
  $("#roman-numerals").submit(function(event) {
  var input = parseInt($("#number").val());
  
  for (var i = 0; i < numbers.length; i++) {
    if (input === numbers[i]) {
      numbers[i] = romans[i];
      alert(romans[i]);
  }
  }

  event.preventDefault();
  });
});
