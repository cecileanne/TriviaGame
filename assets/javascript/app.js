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

// correct answer ids
//  q1choice2
//  q2choice4
//  q3choice3
//  q4choice3
//  q5choice1
//  q6choice4
//  q7choice2
//  q8choice1
//  q9choice3
//  q10choice2
//  q11choice4
//  q12choice3

// When times up - solved images appear along with the appending text below.
// Unanswered items and wrong ids will be Incorrect - and will say so

// trivia to append to Correct! or Incorrect!
//  1 Barbra Streisand did not realize the pantsuit was see-through until she saw the pictures.
//  2 This dress was so iconic it became known as "Gwyneth Paltrow's Pink Ralph Lauren dress".
//  3 Julia Roberts' dress was designed by Valentino.
//  4 Audrey Hepburn won for her portrayal of Princess Ann in Roman Holiday.
//  5 Jennifer Lawrence was the face of Christian Dior, so it made sense she would wear it to the Oscars.
//  6 Cher frequently wears designs by Bob Mackie to the Oscars, and 1988 was no different when she won for Moonstruck.
//  7 Reese Witherspoon won in 2006 for her portrayal of June Carter Cash in the biopic "Walk the Line".
//  8 Diane Keaton's unconventional style was on display in 1978 when she won for "Annie Hall". The designer of her outfit is unknown.
//  9 Cate Blanchett's character in "Blue Jasmine" was crazy but there was nothing crazy about this Armani Prive dress.
//  10 Elizabeth Taylor won her first Best Actress Oscar in 1961 for "Butterfield 8".
//  11 In 2002, Halle Berry became the first African American woman to win Best Actress in this stunning Elie Saab dress.
//  12 Jane Fonda won her first Best Actress Oscar in 1972 for "Klute".

// Time remaining total
// Count how many correct out of 12
// Try again button appears - resets game to 0

// Start state you cannot see questions
$(`#questionBlock`).hide();
// Click button to begin / start quiz and timer
$(document).ready(function() {
  $(`#startButton`).click(function() {
    $(`#startButton`).hide();
    $(`#questionBlock`).show();
  });
});
