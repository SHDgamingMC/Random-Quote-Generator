const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "I'm not arguing, I'm just explaining why I'm right.",
    author: "Unknown"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Why don’t scientists trust atoms? Because they make up everything.",
    author: "Funny Guy"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "If you think you are too small to make a difference, try sleeping with a mosquito.",
    author: "Dalai Lama"
  },
  {
    quote: "Do or do not. There is no try.",
    author: "Yoda"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  }
];

function newQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");

  // Fade out
  quoteText.classList.add("fade-out");
  authorText.classList.add("fade-out");

  setTimeout(() => {
    const random = Math.floor(Math.random() * quotes.length);
    const q = quotes[random];

    quoteText.textContent = q.quote;
    authorText.textContent = `- ${q.author}`;

    // Fade in
    quoteText.classList.remove("fade-out");
    authorText.classList.remove("fade-out");
  }, 500);
}
