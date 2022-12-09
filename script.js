"use strict";

const numbers = document.querySelectorAll(".card__num");
const btn = document.querySelector(".btn");
let rating;

numbers.forEach((num) => {
  num.addEventListener("click", function (e) {
    numbers.forEach((num) => {
      num.classList.remove("card__num--active");
    });
    num.classList.add("card__num--active");
    rating = num.textContent;
  });
});

btn.addEventListener("click", function () {
  if (!rating) {
    document.querySelector(".message").style.display = "block";
    return;
  }

  document.querySelector(".message").style.display = "none";

  setTimeout(() => {
    document.querySelector(".card").style.display = "none";
    document.querySelector(".card-submitted").style.display = "block";
    document.querySelector(".rating").textContent = rating;
  }, 75);

  setTimeout(() => {
    document.querySelector(".card-submitted__img").style.transform = "scale(1)";
    // prettier-ignore
    document.querySelector(".card-submitted__message").style.transform = "scale(1)";
    // prettier-ignore
    document.querySelector(".card-submitted .heading-1").style.transform = "scale(1)";
    // prettier-ignore
    document.querySelector(".card-submitted .paragraph").style.transform = "scale(1)";
  }, 100);
});
