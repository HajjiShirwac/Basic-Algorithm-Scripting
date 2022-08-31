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

//   Title Case a Sentence
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");

//   Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
