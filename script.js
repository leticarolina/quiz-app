/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const form = document.getElementById("quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const question = document.querySelector(".question-item");
const alertWindow = document.getElementById("alert");

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with id 'alert' and hide it after 2 secods (look into setTimeOut) use class 'active' to show the alert

form.addEventListener("submit", (submitted) => {
  submitted.preventDefault();
  const checkedAnswers = answers.filter(
    (a) => a.checked
  ); /*checked is a property to return t or f*/
  checkedAnswers.forEach((e) => {
    const isCorrect = e.value === "true";
    const questionItem = e.closest(".question-item");
    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
    const allTrue = checkedAnswers.every((ans) => ans.value === "true");
    const allAnswered = checkedAnswers.length === questionItem.length;
    if (allTrue && allAnswered) {
      alertWindow.classList.add("active");
    }
  });
});
