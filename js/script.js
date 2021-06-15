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

// create a list called quotes and include multiple objects with the quote author, and citation/ year if applicable
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
  },
  {
    quote: "Once you stop learning, you start dying.",
    source: "Albert Einstein"
  }
  
];


/***
 * `getRandomQuote` function
***/

// function randomly selects a # from 0 to length of array and stores it in a variable to be called on later
function getRandomQuote() {
  
  // create min and max numbers for random generator
  min = 0;
  max = quotes.length;
  const randomNum = Math.floor(Math.random() * (max - min) + min);

  const randomQuote = quotes[randomNum]; // assigns random number to array

  return randomQuote; //return the random array
}

/***
 * `printQuote` function
***/

// function grabs the random quote generated from previous function, pulls all the values and inserts them into HTML
const printQuote = () => {
  const calledQuote = getRandomQuote();
  let randQuote = `
  <p class = "quote">${calledQuote.quote}</p>
  <p class = "source">${calledQuote.source} `
  if ( calledQuote.citation ) { // does quote have citation?
    randQuote += `<span class = "citation">${calledQuote.citation}</span>`;
  }
  if ( calledQuote.year ) { // does quote have year?
    randQuote += `<span class = "year">${calledQuote.year}</span>`;
  }

  document.getElementById('quote-box').innerHTML = randQuote;
  //console.log(randQuote);

   /*** create random background color
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let rgb = `rgb(${r},${g},${b})`;
   let randBackgroundColor = `style = background-color: ${rgb}`;

   //document.getElementById('background-color').innerHTML = randBackgroundColor;
   ***/
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);