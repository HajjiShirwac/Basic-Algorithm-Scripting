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
  