const quotes = [
  {
    quote: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  }
];

const currentDate = new Date();
const day = ("0" + currentDate.getDate()).slice(-2);
const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
const year = currentDate.getFullYear();
const dateStr = `${day}.${month}.${year}`;
const currentDayOfYear = (currentDate.getYear() % 4 == 0 && currentDate.getYear() % 100 != 0 || currentDate.getYear() % 400 == 0) ? 366 : 365;
const currentDayIndex = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24) - 1;
const quoteIndex = currentDayIndex % quotes.length;

const quote = quotes[quoteIndex].quote;
const author = quotes[quoteIndex].author;

document.getElementById("quote").textContent = quote;
document.getElementById("author").textContent = `- ${author}`;
document.getElementById("date").textContent = `Added on ${dateStr}`;
