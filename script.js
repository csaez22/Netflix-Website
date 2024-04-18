/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
 // Deliverable 1: Your code here 👇
  let randNum = getRandomNumber(1,3);
  
  if(randNum == 1){
    return "drama";
  }
  else if(randNum == 2){
    return "fantasy";
  }
  return "comedy";
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if(genre == "random"){
    genre = chooseRandomGenre();
  }
  
  if(genre == "drama"){
    displayShow(dramaShows[getRandomNumber(0,dramaShows.length - 1)]);
  }
  else if(genre == "fantasy"){
    displayShow(fantasyShows[getRandomNumber(0,fantasyShows.length - 1)]);
  }
  else{
    displayShow(comedyShows[getRandomNumber(0,comedyShows.length - 1)]);
  }
}