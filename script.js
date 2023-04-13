const quotes = [
  {
    quote: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
    likes: 0,
    dislikes: 0
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    likes: 0,
    dislikes: 0
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    likes: 0,
    dislikes: 0
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    likes: 0,
    dislikes: 0
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
    likes: 0,
    dislikes: 0
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

const quote = quotes[quoteIndex];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const dateEl = document.getElementById('date');
const enableNotificationsBtn = document.getElementById('enable-notifications');
const likeBtn = document.getElementById('like');
const dislikeBtn = document.getElementById('dislike');
const likeCountEl = document.getElementById('like-count');
const dislikeCountEl = document.getElementById('dislike-count');

quoteEl.innerText = quote.quote;
authorEl.innerText = `- ${quote.author}`;
dateEl.innerText = dateStr;
likeCountEl.innerText = quote.likes;
dislikeCountEl.innerText = quote.dislikes;

likeBtn.addEventListener('click', () => {
  quote.likes++;
  likeCountEl.innerText = quote.likes;
});

dislikeBtn.addEventListener('click', () => {
  quote.dislikes++;
  dislikeCountEl.innerText = quote.dislikes;
});
