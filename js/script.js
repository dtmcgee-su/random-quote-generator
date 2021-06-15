/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
      quote: " Don't ever let somebody tell you... You can't do something. Not even me. All right? You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period.",
      source: "Chris Gardner",
      citation: "Pursuit of Happyness",
      year: 2006, 
  },
  {
      quote: "I made one decision in my life based on money. And I swore I would never do it again.",
      source: "Billy Beane",
      citation: "Moneyball",
      year: 2011, 
  },
  {
      quote: " I ain't going anywhere!!",
      source: "Jordan Belfort",
      citation: "Wolf of Wall Street",
      year: 2013, 
  },
  {
      quote: "Let me tell you something you already know. The world ain't all sunshine and rainbows. It is a very mean and nasty place and it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain't how hard you hit; it's about how hard you can get hit, and keep moving forward. How much you can take, and keep moving forward. That's how winning is done. Now, if you know what you're worth, then go out and get what you're worth. But you gotta be willing to take the hit, and not pointing fingers saying you ain't where you are because of him, or her, or anybody. Cowards do that and that ain't you. You're better than that.",
      source: "Rocky Balboa",
      citation: "Rocky",
      year: 1976, 
  },
  {
      quote: "There is always some kid who may be seeing me for the first or last time, I owe him my best.",
      source: "Joe DiMaggio",
      citation: "The Sporting News",
      year: "April 4, 1951", 
  },
  {
      quote: "The only thing we have to fear is fear itself.",
      source: "Franklin D. Roosevelt",
      citation: "Franklin Delano Roosevelt's First Inaugural Address",
      year: "March 4, 1933", 
  }
  
];



/***
 * `getRandomQuote` function
***/

const getRandomQuote = arr => {
  for (i = 0; i < quotes.length; i++) {
      const randomQuote = Math.random(arr[i])
  }
 return randomQuote;
}

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);