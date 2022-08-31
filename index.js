// Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
// Convert Celsius to Fahrenheit
  function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);

  //   Finders Keepers

  function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i<arr.length; i++){
      if(func(arr[i])){
        return arr[i];
      }
    }
    return undefined
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

//   Boo who
function booWho(bool) {
    return typeof bool === "boolean";;
  }
  
  booWho(null);