const Dress1 = {
  imgFile: `assets/images/001.jpg`,
  solvedImgFile: `assets/images/001-solved.jpg`,
  designer: `Arnold Scaasi`,
  actress: `Barbra Streisand`,
  movie: `Funny Girl`,
  role: `Fanny Brice`,
  broadcastYear: 1969,
  winState: true,
  award: `Best Actress`
};
const Dress2 = {
  imgFile: `assets/images/002.jpg`,
  solvedImgFile: `assets/images/002-solved.jpg`,
  designer: `Ralph Lauren`,
  actress: `Gwyneth Paltrow`,
  movie: `Shakespeare in Love`,
  role: `Viola/Thomas`,
  broadcastYear: 1999,
  winState: true,
  award: `Best Actress`
};
const Dress3 = {
  imgFile: `assets/images/003.jpg`,
  solvedImgFile: `assets/images/003-solved.jpg`,
  designer: `Valentino`,
  actress: `Julia Roberts`,
  movie: `Erin Brockovich`,
  role: `Erin Brockovich`,
  broadcastYear: 2001,
  winState: true,
  award: `Best Actress`
};
const Dress4 = {
  imgFile: `assets/images/004.jpg`,
  solvedImgFile: `assets/images/004-solved.jpg`,
  designer: `Givenchy`,
  actress: `Audrey Hepburn`,
  movie: `Roman Holiday`,
  role: `Princess Ann`,
  broadcastYear: 1954,
  winState: true,
  award: `Best Actress`
};
const Dress5 = {
  imgFile: `assets/images/005.jpg`,
  solvedImgFile: `assets/images/005-solved.jpg`,
  designer: `Christian Dior`,
  actress: `Jennifer Lawrence`,
  movie: `Silver Linings Playbook`,
  role: `Tiffany Maxwell`,
  broadcastYear: 2013,
  winState: true,
  award: `Best Actress`
};
const Dress6 = {
  imgFile: `assets/images/006.jpg`,
  solvedImgFile: `assets/images/006-solved.jpg`,
  designer: `Bob Mackie`,
  actress: `Cher`,
  movie: `Moonstruck`,
  role: `Loretta Castorini`,
  broadcastYear: 1988,
  winState: true,
  award: `Best Actress`
};
const Dress7 = {
  imgFile: `assets/images/007.jpg`,
  solvedImgFile: `assets/images/007-solved.jpg`,
  designer: `Christian Dior`,
  actress: `Reese Witherspoon`,
  movie: `Walk The Line`,
  role: `June Carter Cash`,
  broadcastYear: 2006,
  winState: true,
  award: `Best Actress`
};
const Dress8 = {
  imgFile: `assets/images/008.jpg`,
  solvedImgFile: `assets/images/008-solved.jpg`,
  designer: `unknown`,
  actress: `Diane Keaton`,
  movie: `Annie Hall`,
  role: `Annie Hall`,
  broadcastYear: 1978,
  winState: true,
  award: `Best Actress`
};
const Dress9 = {
  imgFile: `assets/images/009.jpg`,
  solvedImgFile: `assets/images/009-solved.jpg`,
  designer: `Armani Prive`,
  actress: `Cate Blanchett`,
  movie: `Blue Jasmine`,
  role: `Jeanette "Jasmine" Francis`,
  broadcastYear: 2014,
  winState: true,
  award: `Best Actress`
};
const Dress10 = {
  imgFile: `assets/images/010.jpg`,
  solvedImgFile: `assets/images/010-solved.jpg`,
  designer: `Christian Dior`,
  actress: `Elizabeth Taylor`,
  movie: `Butterfield 8`,
  role: `Gloria Wandrous`,
  broadcastYear: 1961,
  winState: true,
  award: `Best Actress`
};
const Dress11 = {
  imgFile: `assets/images/011.jpg`,
  solvedImgFile: `assets/images/011-solved.jpg`,
  designer: `Elie Saab`,
  actress: `Halle Berry`,
  movie: `Monster's Ball`,
  role: `Leticia Musgrove`,
  broadcastYear: 2002,
  winState: true,
  award: `Best Actress`
};
const Dress12 = {
  imgFile: `assets/images/012.jpg`,
  solvedImgFile: `assets/images/012-solved.jpg`,
  designer: `Yves Saint Laurent`,
  actress: `Jane Fonda`,
  movie: `Klute`,
  role: `Bree Daniels`,
  broadcastYear: 1972,
  winState: true,
  award: `Best Actress`
};

// Start state where you cannot see questions or timer yet
$(`#questionBlock`).hide();
$(`#timeRemaining`).hide();
$(`#timeDisplay`).hide();
// Click button to begin / start quiz and timer / manipulate the DOM
$(document).ready(function() {
  $(`#startButton`).click(function() {
    $(`#startButton`).hide();
    $(`#questionBlock`).show();
    $(`#timeRemaining`).show();
    $(`#timeDisplay`).show();
    $(`.form`).show();
    $(`.dressImage`).show();
    $(`.dressImageSolved`).hide();
    $(`.dressImageCaption`).hide();
  });
});
// Set variables
let timeAllowed = 240;
let intervalID;
let correct = 0;

// Wrap everything in a function so it doesn't break my hides and shows
function countdown() {
  // Set the timer as a countdown by the second to answer the questions
  function runClock() {
    intervalID = setInterval(decrement, 1000);
  }

  function decrement() {
    timeAllowed--;
    return timeRemaining;
  }

  const convertedTime = timeConverter(timeRemaining);
  // Convert seconds to minutes and seconds (mm:ss)
  function timeConverter(t) {
    let minutes = Math.floor(t / 60);
    let seconds = t - minutes * 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
  // Set counter to 4:00min or 2400 seconds
  $(`#timeDisplay`).html(convertedTime);

  // When time runs out display Times Up under the 0:00
  if (timeRemaining <= 0) {
    stop();
    $(`#timeRemaining`).append("<h3>  Time's Up!</h3>");
    revealAnswers();
  }
  // Stop function Clear the div so timer does not go past 00:00
  function stop() {
    clearInterval(intervalID);
  }

  runClock();
}

// Listens for user to click options
// TO NICK OR SAL - I totally just realized I should have made my questions arrays and done for loops but I'd already written them so oh well.. If I had more time I would.

// correct answer ids
//  q1choice2
//  q2choice4
//  q3choice3
//  q4choice3
//  q5choice1
//  q6choice4
//  q7choice2
//  X q8choice1
//  X q9choice3
//  X q10choice2
//  q11choice4
//  X q12choice3

//      function revealAnswers() {
// hide unsolved images, show solved
// show trivia answers as a caption to the pictures (see below), hide the form radios
//      $(`.form`).hide();
//      $(`.dressImage`).hide();
//      $(`.dressImageSolved`).show();
//      $(`.dressImageCaption`).show();
// When time runs out (if time also if all questions have been answered)
// Timer says Time's up! below time remaining (which should read 0)
//

//      Compares the userSelection to correct answer
//          Counts the number correct
//  Displays number correct "You got X/12!", treats unanswered as incorrect
// "Try again?"" button resets
//}

// trivia to append to Correct! or Incorrect!
//      $(`#q1Imgcaption`).html(`Barbra Streisand did not realize the pantsuit was see-through until she saw the pictures.`)
//      $(`#q2Imgcaption`).html(`This dress was so iconic it became known as "Gwyneth Paltrow's Pink Ralph Lauren dress".`)
//      $(`#q3Imgcaption`).html(`Julia Roberts' dress was designed by Valentino.`)
//      $(`#q4Imgcaption`).html(`Audrey Hepburn won for her portrayal of Princess Ann in Roman Holiday.`)
//      $(`#q5Imgcaption`).html(`Jennifer Lawrence was the face of Christian Dior, so it made sense she would wear it to the Oscars.`)
//      $(`#q6Imgcaption`).html(`Cher frequently wears designs by Bob Mackie to the Oscars, and 1988 was no different when she won for Moonstruck.`)
//      $(`#q7Imgcaption`).html(`Reese Witherspoon won in 2006 for her portrayal of June Carter Cash in the biopic "Walk the Line".`)
//      $(`#q8Imgcaption`).html(`Diane Keaton's unconventional style was on display in 1978 when she won for "Annie Hall". The designer of her outfit is unknown.`)
//      $(`#q9Imgcaption`).html(`Cate Blanchett's character in "Blue Jasmine" was crazy but there was nothing crazy about this Armani Prive dress.`)
//      $(`#q10Imgcaption`).html(`Elizabeth Taylor won her first Best Actress Oscar in 1961 for "Butterfield 8".`)
//      $(`#q11Imgcaption`).html(`In 2002, Halle Berry became the first African American woman to win Best Actress in this stunning Elie Saab dress.`)
//      $(`#q12Imgcaption`).html(`Jane Fonda won her first Best Actress Oscar in 1972 for "Klute".`)
