let questions = [];
let current = 0;

// JSON file load karna
fetch("Aptitude.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

// ek question show karne ka function
function showQuestion() {
  let q = questions[current];

  // question set karna
  document.getElementById("question").innerHTML = `Q${current + 1}. ${q.question}`;

  // options set karna
  let optionsHTML = q.options.map(opt => 
    `<div><input type="radio" name="option"> ${opt}</div>`
  ).join("");

  document.getElementById("options").innerHTML = optionsHTML;
}

// next button
function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    document.getElementById("questions-container").innerHTML = "";
    document.getElementById("testcopmleted").innerHTML = "<h2 style=\"margin : 170px 0 0 370px\">Quiz Completed!</h2>";
  }
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);

function gotoHomepage()
{
    window.location.href="Home.html";
}