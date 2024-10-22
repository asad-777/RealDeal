function change_theme() {
  const body = document.body;

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
}

let isExecuted_001 = false;
function damn() {
  if (isExecuted_001) return; // Exit if the function has already been executed
  isExecuted_001 = true;
  // Accessing the first element of the collection
  const resultPanel = document.getElementsByClassName("result_pannel")[0];
  const inputPanel = document.getElementsByClassName("input_pannel")[0];

  // Set initial state for the result panel
  resultPanel.style.opacity = 0; // Start with opacity 0
  resultPanel.style.transition = "opacity 0.5s"; // Set transition for fade-in

  // Use a timeout to delay the display change
  setTimeout(() => {
    resultPanel.style.display = "flex"; // Change display to flex
    resultPanel.style.opacity = 1; // Change to opacity 1 to fade in
  }, 600); // 500 milliseconds delay

  // Set the input panel margin to 40% with a transition
  inputPanel.style.transition = "margin-top 0.5s"; // Set transition for margin
  inputPanel.style.marginTop = "40%"; // Change margin to 40%

  // Set a timeout to change the margin to 0% instantly after 0.5s
  setTimeout(() => {
    inputPanel.style.marginTop = "0%"; // Instantly change to 0%
  }, 600); // Same duration as the transition
}
