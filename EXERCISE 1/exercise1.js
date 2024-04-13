
function transformToObjects(listOfNumbers) {
  var result = listOfNumbers.map(function(number) {
    return { val: number };
  });

  return result;
}

var input = [1, 2, 3];
var output = transformToObjects(input);
console.log(output);