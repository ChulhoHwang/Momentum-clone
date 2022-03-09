const quotes = [
  {
    quote:
      "Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1.",
    author: "Warren Buffett",
  },
  {
    quote:
      "Someone’s sitting in the shade today because someone planted a tree a long time ago.",
    author: "Warren Buffett",
  },
  {
    quote:
      "If you aren’t willing to own a stock for 10 years, don’t even think about owning it for 10 minutes.",
    author: "Warren Buffett",
  },
  {
    quote: "Our favorite holding period is forever.",
    author: "Warren Buffett",
  },
  {
    quote: "Price is what you pay, value is what you get.",
    author: "Warren Buffett",
  },
  {
    quote:
      "It’s far better to buy a wonderful company at a fair price, than a fair company at a wonderful price.",
    author: "Warren Buffett",
  },
  {
    quote:
      "The most important quality for an investor is temperament, not intellect.",
    author: "Warren Buffett",
  },
  {
    quote: "Risk comes from not knowing what you are doing.",
    author: "Warren Buffett",
  },
  {
    quote: "Never invest in a business you cannot understand.",
    author: "Warren Buffett",
  },
  {
    quote: "The most important investment you can make is in yourself.",
    author: "Warren Buffett",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
