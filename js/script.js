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

const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    citation: '',
    year: '',
  },
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    source: 'Mother Teresa',
    citation: '',
    year: '',
  },
  {
    quote: 'The only impossible journey is the one you never begin.',
    source: 'Tony Robbins',
    citation: '',
    year: '',
  },
  {
    quote: 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
    source: 'Albert Einstein',
    citation: '',
    year: '',
  },
  {
    quote: 'The Force will be with you. Always.',
    source: 'Obi-Wan Kenobi',
    citation: 'Star Wars',
    year: '',
  },
  {
    quote: 'That which does not kill us makes us stronger.',
    source: 'Friedrich Nietzsche',
    citation: '',
    year: '1888',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    source: 'Mae West',
    citation: '',
    year: '',
  },
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote (){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/*** The function getRandomQuote we can use the length propertie along with
Math.floor and it will return between 0 and the last item of the array.
***/


/***
 * `printQuote` function
***/
function printQuote (){
  let randomQuote = getRandomQuote (); // call the function above

  let htmlQuote = // set the html for quote and source
  `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`;

  if (randomQuote.citation !== ""){
    htmlQuote += `<span class="citation"> ${randomQuote.citation} </span>`
  };

  if (randomQuote.year !== ""){
    htmlQuote += `<span class="year"> ${randomQuote.year} </span>`
  };
  // if formulas to add the year and citation to HTML when applicable
  htmlQuote += "</p>"

  return document.getElementById('quote-box').innerHTML = htmlQuote;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
