"use strict";

const questions = document.querySelectorAll(".question h2");

function toggleFAQ(q) {
  q.parentNode.nextElementSibling.classList.toggle("active");

  const currentSrc = q.nextElementSibling.src;
  const newSrc = currentSrc.includes("icon-plus")
    ? "./assets/images/icon-minus.svg"
    : "./assets/images/icon-plus.svg";
  q.nextElementSibling.src = newSrc;

  const newAlt = currentSrc.includes("icon-plus") ? "expand" : "collapse";
  q.nextElementSibling.alt = newAlt;
}

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    toggleFAQ(question);
  });
  question.setAttribute("tabindex", "0");

  question.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      const newIndex = index >= questions.length - 1 ? 0 : index + 1;
      questions[newIndex].focus();
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(question);
    }
  });
});
