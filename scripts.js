const numbersBox = document.querySelector(".card__rating__numbers");
const ratingBtns = document.querySelectorAll(".card__rating__btn");
const submitBtn = document.querySelector(".btn");
const ratingCard = document.querySelector(".card__rating");
const feedbackCard = document.querySelector(".card__feedback");
const ratingEl = document.querySelector(".rating");
const illustration = document.querySelector(".card__feedback__icon");

const activeBtnClass = "card__rating__btn--active";
const moveRatingClass = "move-rating-card";
const moveFeedbackClass = "move-feedback-card";
let rating;

numbersBox.addEventListener("click", function ({ target }) {
  if (target.nodeName !== "BUTTON" || target.classList.contains(activeBtnClass))
    return;

  ratingBtns.forEach((btn) => btn.classList.remove(activeBtnClass));
  target.classList.add(activeBtnClass);

  rating = target.textContent;
  submitBtn.textContent = "Submit";
});

submitBtn.addEventListener("click", function () {
  if (!rating) {
    submitBtn.textContent = "Select a Rating";
    return;
  }
  ratingEl.textContent = rating;

  ratingCard.classList.add(moveRatingClass);
  feedbackCard.classList.add(moveFeedbackClass);
});

illustration.addEventListener("click", function () {
  ratingCard.classList.remove(moveRatingClass);
  feedbackCard.classList.remove(moveFeedbackClass);

  ratingBtns.forEach((btn) => btn.classList.remove(activeBtnClass));
  rating = "";
});
