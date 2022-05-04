const quotes = [
  {
    quote:
      "I don't need to feel like I'm waiting to be noticed. I know who I am, and I'll know what I want if and when it ever comes along.",
    author: "- FIONNA",
  },
  {
    quote:
      "People get built different. We don't need to figure it out, we just need to respect it.",
    author: "- PRINCESS BUBBLEGUM",
  },
  {
    quote:
      "Home isn't a place. Let me give you a clue. Home is anywhere that people care about you.",
    author: "- JAKE THE DOG",
  },
  {
    quote:
      "When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.",
    author: "- BMO",
  },
  {
    quote:
      "Something weird might just be something hamiliar viewed from a different angle and that's not scary, right?",
    author: "- MARCELINE'S MUM",
  },
  {
    quote:
      "You don't need a mirror to look good. You're beautiful on the inside like... your brain and stuff.",
    author: "- FINN THE HUMAN",
  },
  {
    quote: "Like...whatevvah!",
    author: "- LUMPY SPACE PRINCESS",
  },
  {
    quote:
      "Suckin' at something is the first step to being sorta good at something.",
    author: "- FINN THE HUMAN",
  },
  {
    quote:
      "People make mistakes. It's part of growing up. And you never really stop growing.",
    author: "- DUKE OF NUTS",
  },
  {
    quote: "Humor is the highest form of intelligence",
    author: "- LAMP",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// get a quote randomly
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
