

function transformToObjects(listOfNumbers) {
  var result = listOfNumbers.map(function(number) {
    return { val: number };
  });

  return result;
}

var input = [44];
var output = transformToObjects(input);
console.log(output);