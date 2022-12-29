const store = [
  {quote: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar"
  },
  {quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {quote: "Either you run the day, or the day runs you.",
    author: "Jim Rohn"
  },  
  {quote: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach"
  },   
  {quote: "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown"
  },                            
];


function getQuote() {
  let storeNumber = Math.floor(Math.random() * store.length);
  $("#text").text(store[storeNumber].quote);
  $("#author").text(store[storeNumber].author);


  let quoteApiFormat = store[storeNumber].quote.replace(/\s/g, "%20");
  let authorApiFormat = store[storeNumber].author.replace(/\s/g, "%20");
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=";
  twitterLink += quoteApiFormat;
  twitterLink += authorApiFormat;
  $("#tweet-quote").prop("href",twitterLink);
}


$(document).ready(function () {
  getQuote();
});