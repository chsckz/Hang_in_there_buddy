// query selector variables go here 👇
// variables to generate poster
const posterImg = document.querySelector('.poster-img');
const posterTitle = document.querySelector('.poster-title');
const posterQuote = document.querySelector('.poster-quote');

// variables for poster input values
const inputImg = document.querySelector('#poster-image-url');
const inputTitle = document.querySelector('#poster-title');
const inputQuote = document.querySelector('#poster-quote');

// variables for all buttons
const showRandomBtn = document.querySelector('.show-random'); // generate random poster
const showFormBtn = document.querySelector('.show-form'); // hides main, shows create your own form
const makePosterBtn = document.querySelector('.make-poster'); // make this poster (from create your own)
const showSavedBtn = document.querySelector('.show-saved'); // hides main, shows all saved posters
const savePosterBtn = document.querySelector('.save-poster'); // save this poster

// variables for buttons to return back to main page
const showMainFromFormBtn = document.querySelector('.show-main'); // "nevermind take me back from form page"
const backToMainFromSavedBtn = document.querySelector('.back-to-main'); // "back to main from saved page"

// variable for saved posters grid
const savedPostersGrid = document.querySelector('.saved-posters-grid');

// variables for each section
const mainPosterSection = document.querySelector('.main-poster');
const posterFormSection = document.querySelector('.poster-form');
const savedPosterSection = document.querySelector('.saved-posters');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.onload = getRandomPoster();

showRandomBtn.addEventListener('click', getRandomPoster);

showSavedBtn.addEventListener('click', function() {
  savedPosterSection.classList.toggle('hidden');
  mainPosterSection.classList.toggle('hidden');
});

backToMainFromSavedBtn.addEventListener('click', function() {
  savedPosterSection.classList.toggle('hidden');
  mainPosterSection.classList.toggle('hidden');
})

showFormBtn.addEventListener('click', showForm);
showMainFromFormBtn.addEventListener('click', showMainPoster);

makePosterBtn.addEventListener('click', createThisPoster);

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomPoster() {
  getRandomPhoto();
  getRandomTitle();
  getRandomQuote();

}

function getRandomPhoto() {
  posterImg.src = images[getRandomIndex(images)];
}

function getRandomTitle() {
  posterTitle.textContent = titles[getRandomIndex(titles)];
}

function getRandomQuote() {
  posterQuote.textContent = quotes[getRandomIndex(quotes)];
}

function createThisPoster(e) {
  let newImg = inputImg.value;
  let newTitle = inputTitle.value;
  let newQuote = inputQuote.value;
  e.preventDefault();
  console.log(newImg, newTitle, newQuote);
  // cool have all values saved...how do i put it into making a poster?
  // it cant be random...
  posterImg.src = newImg;
  posterTitle.textContent = newTitle;
  posterQuote.textContent = newQuote;
  console.log(posterImg.src);
  // maybe i should create a new function to create a poster off of this info
  // keep random separate?
  // well i need to save these values anyway in case it's saved, so it needs to be pushed to the corresponding arrays
  makePoster(newImg, newTitle, newQuote);
  // show poster by returning to main page
  showMainPoster();
}

// create a poster given inputs 
function makePoster(imgURL, title, quote) {
  // saved posters should be stored as objects?
  // so when creating a poster, make it an object?
  let newPoster = new Poster (imgURL, title, quote);
  console.log('is this an object: ', newPoster); // logs Poster obj with id, imageURL, title, and quote properties propery filled out
  // where did the id come from?????
}

function showForm() {
  posterFormSection.classList.remove('hidden');
  mainPosterSection.classList.add('hidden');
}

function showMainPoster() {
  posterFormSection.classList.add('hidden');
  mainPosterSection.classList.remove('hidden');
}
