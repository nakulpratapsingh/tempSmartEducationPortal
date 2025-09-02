let questions = [];
let current = 0;

const urlParams = new URLSearchParams(window.location.search);
const file = urlParams.get("subject");



// JSON file load karna
if (file)
{
fetch(file.endsWith(".json") ? file : `${file}.json`)
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });
}
else{
  document.getElementById("question").innerHTML = "File not found!";
}

// ek question show karne ka function
function showQuestion() {
  let q = questions[current];

  //console.log(q);
  // question set karna
  document.getElementById("question").innerHTML = `Q${current + 1}. ${q.question}`;

  // options set karna
  let optionsHTML = q.options.map(opt => 
  `<div><input type="radio" name="option" value="${opt}"> ${opt}</div>`
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