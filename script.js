"use strict";
//Selecting Elements
const winnerText = document.querySelector(".winner");

const board = document.querySelector(".board");

const box = document.querySelectorAll(".box");

const boxOne = document.querySelector(".box--1");
const boxTwo = document.querySelector(".box--2");
const boxThree = document.querySelector(".box--3");
const boxFour = document.querySelector(".box--4");
const boxFive = document.querySelector(".box--5");
const boxSix = document.querySelector(".box--6");
const boxSeven = document.querySelector(".box--7");
const boxEight = document.querySelector(".box--8");
const boxNine = document.querySelector(".box--9");

const form = document.querySelector(".form");
const game = document.querySelector(".game");
const submit = document.querySelector(".btn-submit");

const playerOneName = document.querySelector(".player-1-text");
const playerTwoName = document.querySelector(".player-2-text");

//Initial Conditions
let currentPlayer = 1;
let winner = 0;
let playing = 1;

const firstRow = [1, 1, 1];
const secondRow = [1, 1, 1];
const thirdRow = [1, 1, 1];

//Methods
const switchPlayer = function () {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
};

//Winning conditions
const win = function () {
  if (firstRow[0] === "x" && firstRow[1] === "x" && firstRow[2] === "x") {
    winner = 1;
  } else if (
    secondRow[0] === "x" &&
    secondRow[1] === "x" &&
    secondRow[2] === "x"
  ) {
    winner = 1;
  } else if (
    thirdRow[0] === "x" &&
    thirdRow[1] === "x" &&
    thirdRow[2] === "x"
  ) {
    winner = 1;
  } else if (
    firstRow[0] === "x" &&
    secondRow[0] === "x" &&
    thirdRow[0] === "x"
  ) {
    winner = 1;
  } else if (
    firstRow[1] === "x" &&
    secondRow[1] === "x" &&
    thirdRow[1] === "x"
  ) {
    winner = 1;
  } else if (
    firstRow[2] === "x" &&
    secondRow[2] === "x" &&
    thirdRow[2] === "x"
  ) {
    winner = 1;
  } else if (
    firstRow[0] === "x" &&
    secondRow[1] === "x" &&
    thirdRow[2] === "x"
  ) {
    winner = 1;
  } else if (
    firstRow[2] === "x" &&
    secondRow[1] === "x" &&
    thirdRow[0] === "x"
  ) {
    winner = 1;
  }

  if (firstRow[0] === "0" && firstRow[1] === "0" && firstRow[2] === "0") {
    winner = 2;
  } else if (
    secondRow[0] === "0" &&
    secondRow[1] === "0" &&
    secondRow[2] === "0"
  ) {
    winner = 2;
  } else if (
    thirdRow[0] === "0" &&
    thirdRow[1] === "0" &&
    thirdRow[2] === "0"
  ) {
    winner = 2;
  } else if (
    firstRow[0] === "0" &&
    secondRow[0] === "0" &&
    thirdRow[0] === "0"
  ) {
    winner = 2;
  } else if (
    firstRow[1] === "0" &&
    secondRow[1] === "0" &&
    thirdRow[1] === "0"
  ) {
    winner = 2;
  } else if (
    firstRow[2] === "0" &&
    secondRow[2] === "0" &&
    thirdRow[2] === "0"
  ) {
    winner = 2;
  } else if (
    firstRow[0] === "0" &&
    secondRow[1] === "0" &&
    thirdRow[2] === "0"
  ) {
    winner = 2;
  } else if (
    firstRow[2] === "0" &&
    secondRow[1] === "0" &&
    thirdRow[0] === "0"
  ) {
    winner = 2;
  }
  if (winner === 1) {
    board.classList.add("hidden");
    winnerText.textContent = `${playerOneName.textContent} wins!`;
    winnerText.classList.remove("hidden");
  } else if (winner === 2) {
    board.classList.add("hidden");
    winnerText.textContent = `${playerTwoName.textContent} wins!`;
    winnerText.classList.remove("hidden");
  }
};

//Event Listeners

submit.addEventListener("click", function () {
  const playerOne = document.querySelector(".player-1-input").value;
  const playerTwo = document.querySelector(".player-2-input").value;
  playerOneName.textContent = playerOne;
  playerTwoName.textContent = playerTwo;

  form.classList.add("hidden");
  game.classList.remove("hidden");
});

boxOne.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxOne.classList.add("x-marked");
    switchPlayer();
    firstRow[0] = "x";
    win();
  } else if (currentPlayer === 2) {
    boxOne.classList.add("o-marked");
    switchPlayer();
    firstRow[0] = "0";
    win();
  }
});

boxTwo.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxTwo.classList.add("x-marked");
    switchPlayer();
    firstRow[1] = "x";
    win();
  } else if (currentPlayer === 2) {
    boxTwo.classList.add("o-marked");
    switchPlayer();
    firstRow[1] = "0";
    win();
  }
});

boxThree.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxThree.classList.add("x-marked");
    switchPlayer();
    firstRow[2] = "x";
    console.log(firstRow);
    win();
  } else if (currentPlayer === 2) {
    boxThree.classList.add("o-marked");
    switchPlayer();
    firstRow[2] = "0";
    win();
  }
});

boxFour.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxFour.classList.add("x-marked");
    switchPlayer();
    secondRow[0] = "x";
    win();
  } else if (currentPlayer === 2) {
    boxFour.classList.add("o-marked");
    switchPlayer();
    secondRow[0] = "0";
    win();
  }
});

boxFive.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxFive.classList.add("x-marked");
    switchPlayer();
    secondRow[1] = "x";
    win();
  } else if (currentPlayer === 2) {
    boxFive.classList.add("o-marked");
    switchPlayer();
    secondRow[1] = "0";
    win();
  }
});

boxSix.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxSix.classList.add("x-marked");
    switchPlayer();
    secondRow[2] = "x";
    win();
  } else if (currentPlayer === 2) {
    boxSix.classList.add("o-marked");
    switchPlayer();
    secondRow[2] = "0";
    win();
  }
});

boxSeven.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxSeven.classList.add("x-marked");
    switchPlayer();
    thirdRow[0] = "x";
    win();
  } else if (currentPlayer === 2) {
    boxSeven.classList.add("o-marked");
    switchPlayer();
    thirdRow[0] = "0";
    win();
  }
});

boxEight.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxEight.classList.add("x-marked");
    switchPlayer();
    thirdRow[1] = "x";
    win();
  } else if (currentPlayer === 2) {
    boxEight.classList.add("o-marked");
    switchPlayer();
    thirdRow[1] = "0";
    win();
  }
});

boxNine.addEventListener("click", function () {
  if (currentPlayer === 1) {
    boxNine.classList.add("x-marked");
    switchPlayer();
    thirdRow[2] = "x";
    win();
  } else if (currentPlayer === 2) {
    boxNine.classList.add("o-marked");
    switchPlayer();
    thirdRow[2] = "0";
    win();
  }
});
