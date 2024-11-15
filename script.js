// Questions and Options
const questions = [
  {
    question: "Which hook is used to save information in a React component?",
    options: [
      { text: "useState", value: "a" },
      { text: "useEffect", value: "b" },
      { text: "useReducer", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "How do you make a React component?",
    options: [
      { text: "function MyComponent() {}", value: "a" },
      { text: "new Component()", value: "b" },
      { text: "component MyComponent", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "What is JSX?",
    options: [
      { text: "A way to write HTML inside JavaScript", value: "a" },
      { text: "A JavaScript library", value: "b" },
      { text: "A CSS tool", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Which command shows a React component on the screen?",
    options: [
      { text: "ReactDOM.render()", value: "a" },
      { text: "render()", value: "b" },
      { text: "document.render()", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "What does 'useEffect' do in React?",
    options: [
      { text: "It lets you run code when the component loads", value: "a" },
      { text: "It saves data", value: "b" },
      { text: "It sets up the layout", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "How do you pass data to a child component in React?",
    options: [
      { text: "With props", value: "a" },
      { text: "With state", value: "b" },
      { text: "With context", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Which hook shares data across multiple components?",
    options: [
      { text: "useContext", value: "a" },
      { text: "useMemo", value: "b" },
      { text: "useState", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "How can you stop a component from updating too often?",
    options: [
      { text: "React.memo", value: "a" },
      { text: "React.update()", value: "b" },
      { text: "React.renderComponent()", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "What happens when 'useEffect' has an empty array?",
    options: [
      { text: "It runs once when the component loads", value: "a" },
      { text: "It runs every time the component updates", value: "b" },
      { text: "It doesn’t run at all", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "How do you get props in a class component?",
    options: [
      { text: "this.props", value: "a" },
      { text: "props", value: "b" },
      { text: "getProps()", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Which hook is used for complex state handling?",
    options: [
      { text: "useReducer", value: "a" },
      { text: "useContext", value: "b" },
      { text: "useState", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Why use 'React.memo'?",
    options: [
      { text: "To stop the component from updating unnecessarily", value: "a" },
      { text: "To set up global data", value: "b" },
      { text: "To run code after rendering", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "How do you make a Context in React?",
    options: [
      { text: "React.createContext()", value: "a" },
      { text: "Context.create()", value: "b" },
      { text: "createGlobalState()", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Which hook runs code only when the component first loads?",
    options: [
      { text: "useEffect with an empty array", value: "a" },
      { text: "useMemo", value: "b" },
      { text: "useState", value: "c" },
    ],
    correctAnswer: "a",
  },
  {
    question: "What does 'useRef' let you do?",
    options: [
      { text: "Directly access a DOM element", value: "a" },
      { text: "Store data", value: "b" },
      { text: "Run tasks after rendering", value: "c" },
    ],
    correctAnswer: "a",
  },
];

const exercises = [
  {
    question:
      "Create a functional component called `Greeting` that returns a `h1` tag with the text 'Hello, World!'",
  },
  {
    question:
      "Create a `useState` hook to keep track of a counter and display the counter value on the screen. Add a button to increment the counter.",
  },
  {
    question:
      "Write a `useEffect` hook that runs only once when the component loads, logging 'Component loaded' to the console.",
  },
  {
    question:
      "Create a `ColorBox` component that takes a `color` prop and renders a `div` with a background color set to the `color` prop.",
  },
  {
    question:
      'Use the `map` method to render a list of items from an array `["Apple", "Banana", "Cherry"]` inside a `ul` element.',
  },
  {
    question:
      "Create a `Greeting` component that takes a `name` prop and displays 'Hello, {name}' where `{name}` is the prop value.",
  },
  {
    question:
      "Write a function to toggle between 'Light' and 'Dark' mode using `useState`. Display the current mode and a button to switch modes.",
  },
  {
    question:
      "Use `useEffect` with a dependency array that re-runs when a `count` state variable changes, logging 'Count changed' to the console.",
  },
  {
    question:
      "Create a button that, when clicked, adds a new item to a list stored in `useState`. Display the list items on the screen.",
  },
  {
    question:
      "Write a function using `setTimeout` inside `useEffect` to display 'Hello, after 3 seconds!' after a 3-second delay when the component loads.",
  },
  {
    question:
      "Create a form with a text input that updates a `name` state variable on change. Display the entered name below the input.",
  },
  {
    question:
      "Create a `useRef` to focus an input field when a button is clicked.",
  },
  {
    question:
      "Write a function that fetches data from an API and displays it. Use `useEffect` to make the request only when the component loads.",
  },
  {
    question:
      "Create a `Counter` component with `increment`, `decrement`, and `reset` buttons using `useState` to manage the counter.",
  },
  {
    question:
      "Use `useContext` to share a color theme between two components. Display one component with a light theme and the other with a dark theme.",
  },
  {
    question:
      "Create a `useReducer` to manage a counter with `increment` and `decrement` actions.",
  },
  {
    question:
      "Create a component that fetches and displays a user's information when the `userId` prop changes. Use `useEffect` for the fetch operation.",
  },
  {
    question:
      "Write a function that changes a `backgroundColor` state between 'blue' and 'green' each time a button is clicked.",
  },
  {
    question:
      "Use `React.memo` to prevent re-rendering of a child component that receives the same props.",
  },
  {
    question:
      "Create a `Weather` component that fetches and displays weather data for a city entered in an input field.",
  },
];

const exerciseHints = [
  {
    hint: "function MyComponent() {\n  return &lt;h1&gt;Welcome!&lt;/h1&gt;;\n}",
  },
  {
    hint: "const [value, setValue] = useState(0);\n&lt;button onClick={() => setValue(value + 1)}&gt;Increase&lt;/button&gt;",
  },
  { hint: "useEffect(() => {\n  console.log('Hello');\n}, []);" },
  {
    hint: "function Box({ color }) {\n  return &lt;div style={{ backgroundColor: color }}&gt;&lt;/div&gt;;\n}",
  },
  {
    hint: "const fruits = ['Apple', 'Orange'];\n&lt;ul&gt;{fruits.map(fruit =&gt; &lt;li key={fruit}&gt;{fruit}&lt;/li&gt;)}&lt;/ul&gt;",
  },
  {
    hint: "function Welcome({ user }) {\n  return &lt;h1&gt;Hello, {user}!&lt;/h1&gt;;\n}",
  },
  {
    hint: "const [theme, setTheme] = useState('Light');\n&lt;button onClick={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}&gt;Switch&lt;/button&gt;",
  },
  {
    hint: "useEffect(() => {\n  console.log('Variable changed');\n}, [variable]);",
  },
  {
    hint: "const [list, setList] = useState([]);\n&lt;button onClick={() => setList([...list, 'New Item'])}&gt;Add&lt;/button&gt;",
  },
  {
    hint: "useEffect(() => {\n  setTimeout(() => console.log('Delayed message'), 2000);\n}, []);",
  },
  {
    hint: "const [input, setInput] = useState('');\n&lt;input onChange={(e) => setInput(e.target.value)} /&gt;\n&lt;p&gt;{input}&lt;/p&gt;",
  },
  {
    hint: "const ref = useRef();\n&lt;button onClick={() => ref.current.focus()}&gt;Focus&lt;/button&gt;",
  },
  {
    hint: "useEffect(() => {\n  fetch('https://example.com')\n    .then(res =&gt; res.json())\n    .then(data =&gt; setData(data));\n}, []);",
  },
  {
    hint: "const [num, setNum] = useState(0);\n&lt;button onClick={() => setNum(num + 1)}&gt;+&lt;/button&gt;\n&lt;button onClick={() => setNum(0)}&gt;Reset&lt;/button&gt;",
  },
  {
    hint: "const ThemeContext = createContext();\nfunction App() {\n  return &lt;ThemeContext.Provider value='dark'&gt;...&lt;/ThemeContext.Provider&gt;;\n}",
  },
  {
    hint: "function reducer(state, action) {\n  switch (action) {\n    case 'up': return state + 1;\n    case 'down': return state - 1;\n  }\n}",
  },
  {
    hint: "useEffect(() => {\n  fetch(`https://api.site.com/${id}`)\n}, [id]);",
  },
  {
    hint: "const [color, setColor] = useState('red');\n&lt;button onClick={() => setColor(color === 'red' ? 'green' : 'red')}&gt;Switch Color&lt;/button&gt;",
  },
  {
    hint: "const OptimizedComponent = React.memo(Component);",
  },
  {
    hint: "const [city, setCity] = useState('');\nconst loadWeather = () => fetch(`https://api.weather.com/${city}`);",
  },
];

// Variables
let globalFormData = null; // Store formData globally
let mcqTimeLeft = 15 * 60; // 15 minutes in seconds for MCQs
let questionsTimeLeft = 45 * 60; // 45 minutes in seconds for exercises
let currentPage = "mcqs"; // Track current page
let mcqTimer = null;
let questionsTimer = null;
let timeLeft = 60 * 60; // 60 minutes in seconds
let quizSubmitted = false; // Track if the quiz has been submitted
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const submitButton = document.querySelector(".submit-button");
const questionsContainer = document.getElementById("questionsContainer");
const form = document.getElementById("quizForm");
const quizInfo = document.querySelector(".student-info");
let timer = null;
let startTime;

// Initially hide Start button, Timer, Questions, and Submit button
startButton.style.display = "none";
timerElement.style.display = "none";
questionsContainer.style.display = "none";
submitButton.style.display = "none";

// Enable Start button and Timer only if Name, Roll Number, and Section are filled
const quizHeading = document.querySelector(".heading");
const nameInput = document.getElementById("name");
const rollNumberInput = document.getElementById("rollNumber");
const sectionInput = document.getElementById("section");

function checkInputsFilled() {
  if (nameInput.value && rollNumberInput.value && sectionInput.value) {
    startButton.style.display = "inline-block";
    timerElement.style.display = "inline-block";
  } else {
    startButton.style.display = "none";
    timerElement.style.display = "none";
  }
}

nameInput.addEventListener("input", checkInputsFilled);
rollNumberInput.addEventListener("input", checkInputsFilled);
sectionInput.addEventListener("input", checkInputsFilled);

startButton.addEventListener("click", function () {
  if (!mcqTimer && currentPage === "mcqs") {
    startTime = new Date(); // Record start time
    startTimer("mcqs");
    history.pushState({}, "", "/mcqs"); // Navigate to MCQs page
    this.disabled = true; // Disable start button
    questionsContainer.style.display = "block"; // Show MCQs
    startButton.style.display = "none";
    quizInfo.style.display = "none";
  }
});

function startTimer(page) {
  clearInterval(mcqTimer);
  clearInterval(questionsTimer);

  if (page === "mcqs") {
    timerElement.style.display = "inline-block";
    mcqTimer = setInterval(() => {
      let minutes = Math.floor(mcqTimeLeft / 60);
      let seconds = mcqTimeLeft % 60;
      if (seconds < 10) seconds = "0" + seconds;

      timerElement.textContent = `Time Left: ${minutes}:${seconds}`;
      mcqTimeLeft--;

      if (mcqTimeLeft < 0) {
        clearInterval(mcqTimer);
        form.submit(); // Submit when time is up
      }
    }, 1000);
  } else if (page === "questions") {
    timerElement.style.display = "inline-block";
    questionsTimer = setInterval(() => {
      let minutes = Math.floor(questionsTimeLeft / 60);
      let seconds = questionsTimeLeft % 60;
      if (seconds < 10) seconds = "0" + seconds;

      timerElement.textContent = `Time Left: ${minutes}:${seconds}`;
      questionsTimeLeft--;

      if (questionsTimeLeft < 0) {
        clearInterval(questionsTimer);
        form.submit(); // Submit when time is up
      }
    }, 1000);
  }
}

// Function to check if all MCQs are answered and display submit button
function checkIfAllQuestionsAnswered() {
  const totalQuestions = questions.length;
  const answeredQuestions = new Set();

  // Collect all radio buttons
  const radios = questionsContainer.querySelectorAll('input[type="radio"]');

  // Iterate over the radio buttons to check if they are selected
  radios.forEach((radio) => {
    if (radio.checked) {
      answeredQuestions.add(radio.name); // Track unique question names that have answers
    }
  });

  // Check if all questions are answered
  if (answeredQuestions.size === totalQuestions) {
    submitButton.style.display = "block"; // Display the submit button
  } else {
    submitButton.style.display = "none"; // Hide the submit button if not all questions are answered
  }
}

// Attach event listeners to radio buttons to trigger the check function
function attachCheckboxListeners() {
  const radios = questionsContainer.querySelectorAll('input[type="radio"]');

  radios.forEach((radio) => {
    radio.addEventListener("change", checkIfAllQuestionsAnswered); // Check when radio changes
  });
}

// Render Questions to the DOM
function renderQuestions() {
  const shuffledQuestions = shuffle(questions);
  shuffledQuestions.forEach((questionObj, index) => {
    questionObj.options = shuffle(questionObj.options);

    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const questionTitle = document.createElement("p");
    questionTitle.textContent = `${index + 1}. ${questionObj.question}`;
    questionTitle.style.userSelect = "none";
    questionDiv.appendChild(questionTitle);

    questionObj.options.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.id = `q${index + 1}${option.value}`;
      input.name = `q${index + 1}`;
      input.value = option.value;

      const label = document.createElement("label");
      label.htmlFor = input.id;
      label.textContent = option.text;

      optionDiv.appendChild(input);
      optionDiv.appendChild(label);
      questionDiv.appendChild(optionDiv);
    });

    questionsContainer.appendChild(questionDiv);
  });

  attachCheckboxListeners(); // Attach listeners after questions are rendered
}

// Initialize the Quiz
function initQuiz() {
  renderQuestions(); // Render the questions on page load
  checkInputsFilled(); // Check if inputs are already filled
}

initQuiz();

// Helper Function: Shuffle Array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayResults(formData) {
  document.querySelector(".container").innerHTML = ""; // Clear content
  const resultContainer = document.createElement("div");
  resultContainer.className = "result-container";

  resultContainer.innerHTML = `
    <h2>Quiz Results</h2>
    <p><strong>Name:</strong> ${formData.get("name")}</p>
    <p><strong>Roll Number:</strong> ${formData.get("rollNumber")}</p>
    <p><strong>Section:</strong> ${formData.get("section")}</p>
    <p><strong>Marks Obtained:</strong> ${formData.get("marksObtained")}</p>
    <p><strong>Total Marks:</strong> ${formData.get("totalMarks")}</p>
    <p><strong>Time Taken:</strong> ${formData.get("timeTaken")}</p>
    <h3>Thank you for taking the quiz!</h3>
    <p>You cannot go back after submitting the quiz.</p>
  `;

  // Displaying each question and user's answer with correct/incorrect indication
  const answersContainer = document.createElement("div");
  answersContainer.className = "answers-container";
  answersContainer.innerHTML = "<h3>MCQ Answers</h3>";

  questions.forEach((questionObj, index) => {
    const questionKey = `q${index + 1}`;
    const userAnswer = formData.get(questionKey);
    const isCorrect = userAnswer === questionObj.correctAnswer;

    // Create the question block
    const questionDiv = document.createElement("div");
    questionDiv.className = "question-result";

    const questionTitle = document.createElement("p");
    questionTitle.innerHTML = `<strong>Q${index + 1}:</strong> ${
      questionObj.question
    }`;
    questionDiv.appendChild(questionTitle);

    // Create the options block
    questionObj.options.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "option";

      // Check if the option is the user's selected answer and whether it was correct
      const isSelected = userAnswer === option.value;
      const isCorrectAnswer = option.value === questionObj.correctAnswer;

      // Create the indicator for correctness
      let indicator = "";
      if (isSelected) {
        indicator = isCorrect ? "✔️ (Correct)" : "❌ (Incorrect)";
      } else if (isCorrectAnswer) {
        indicator = "✔️ (Correct Answer)";
      }

      // Style the option based on correctness
      optionDiv.innerHTML = `
        <label>
          <input type="radio" disabled ${isSelected ? "checked" : ""}>
          ${option.text} ${indicator}
        </label>
      `;
      questionDiv.appendChild(optionDiv);
    });

    answersContainer.appendChild(questionDiv);
  });

  resultContainer.appendChild(answersContainer);

  // Append resultContainer to the DOM
  document.querySelector(".container").appendChild(resultContainer);
  preventBackNavigation();
}

// Helper function to get the option text based on the answer value
function getOptionText(questionObj, answerValue) {
  const selectedOption = questionObj.options.find(
    (option) => option.value === answerValue
  );
  return selectedOption ? selectedOption.text : "No Answer";
}

function preventBackNavigation() {
  window.addEventListener("popstate", function () {
    if (quizSubmitted) {
      alert("Quiz has already been submitted. You cannot go back.");
      history.pushState({}, "", "/results");
    }
  });
}

// Show toaster when form is submitted
const toasterOverlay = document.getElementById("toasterOverlay");
const toaster = document.getElementById("toaster");

// Generate ZIP file of exercises and answers
function generateZipFile(exercisesContainer) {
  const JSZip = window.JSZip;
  const zip = new JSZip();
  const textAreas = exercisesContainer.querySelectorAll("textarea");

  textAreas.forEach((textArea, index) => {
    const answer = textArea.value.trim() || "No Answer Provided";
    const content = `Question: ${exercises[index].question}\nAnswer: ${answer}`;
    zip.file(`exercise${index + 1}.txt`, content);
  });

  zip.generateAsync({ type: "blob" }).then(function (blob) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "exercises.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Show the spinner during submission
  toasterOverlay.style.display = "block";

  const formData = new FormData(this);
  const marksObtained = calculateMarks(formData);
  const totalMarks = questions.length;
  const endTime = new Date();
  const timeTaken = Math.floor((endTime - startTime) / 1000);
  const minutesTaken = Math.floor(timeTaken / 60);
  const secondsTaken = timeTaken % 60;

  formData.append("marksObtained", marksObtained);
  formData.append("totalMarks", totalMarks);
  formData.append("timeTaken", `${minutesTaken}m ${secondsTaken}s`);

  // Save formData globally
  globalFormData = formData;

  // Hide the MCQs and submit button after submission
  questionsContainer.innerHTML = ""; // Clear MCQs
  submitButton.style.display = "none"; // Hide submit button
  timerElement.style.display = "none"; // Optionally hide the timer while navigating

  // Show the spinner during submission
  toasterOverlay.style.display = "none";
  history.pushState({}, "", "/questions"); // Navigate to questions page
  showQuestionsPage();

  // After submission, hide the spinner
  postToAPI(formData).catch(() => {
    alert("There was an error submitting your quiz. Please try again.");
  });
});

function showQuestionsPage() {
  currentPage = "questions"; // Update current page to exercises

  // Reset MCQ timer and start the exercises timer
  clearInterval(mcqTimer);
  mcqTimeLeft = 15 * 60; // Reset MCQ timer

  timerElement.style.display = "inline-block"; // Ensure the timer is visible
  questionsTimeLeft = 45 * 60; // Reset the timer for the exercises
  startTimer("questions"); // Start the exercises timer

  // Render the exercises content
  renderExercises();
}

// Post form data to the API
async function postToAPI(formData) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzBjTLg6jQLLj3pA9XIPP4rDZe_iG22eGY5Jm5t-QPfJzFv46rRJW793VtFPivhnhOX3Q/exec",
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data submitted successfully", data);
    toasterOverlay.style.display = "none"; // Hide toaster once submission is complete
  } catch (error) {
    console.error("Error submitting data", error);
    toasterOverlay.style.display = "none"; // Hide toaster in case of error
    alert("There was an error submitting your quiz. Please try again.");
  }
}

function calculateMarks(formData) {
  let score = 0;

  questions.forEach((questionObj, index) => {
    const questionKey = `q${index + 1}`;
    if (formData.get(questionKey) === questionObj.correctAnswer) {
      score++;
    }
  });

  return score;
}

function renderExercises() {
  const exercisesContainer = document.createElement("div");
  exercisesContainer.className = "exercises-container";

  exercises.forEach((exercise, index) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.className = "exercise";

    const exerciseTitle = document.createElement("p");
    exerciseTitle.textContent = `${index + 1}. ${exercise.question}`;
    exerciseDiv.appendChild(exerciseTitle);

    const hintPara = document.createElement("p");
    hintPara.innerHTML = `<strong>Hint:</strong><br>${exerciseHints[
      index
    ].hint.replace(/\n/g, "<br>")}`;
    hintPara.className = "hint";
    exerciseDiv.appendChild(hintPara);

    const textArea = document.createElement("textarea");
    textArea.id = `exercise${index + 1}`;
    exerciseDiv.appendChild(textArea);

    exercisesContainer.appendChild(exerciseDiv);
  });

  const downloadButton = document.createElement("button");
  downloadButton.textContent = "Download";
  downloadButton.className = "download-button"; // Style like the submit button
  downloadButton.addEventListener("click", function () {
    // Ensure exercises container is passed for ZIP generation
    generateZipFile(document.querySelector(".exercises-container"));

    // Also display results after download
    displayResults(globalFormData);
    // Change URL to results
    history.pushState({}, "", "/results");
  });

  exercisesContainer.appendChild(downloadButton);
  document.querySelector(".container").appendChild(exercisesContainer);
}

// Function to check if at least one exercise has been filled out
function checkIfAnyExerciseFilled() {
  const textAreas = document.querySelectorAll("textarea");
  let allFilled = true;

  textAreas.forEach((textArea) => {
    if (textArea.value.trim() === "") {
      allFilled = false;
    }
  });

  if (allFilled) {
    submitButton.style.display = "block"; // Show submit button after all exercises are answered
  } else {
    submitButton.style.display = "none"; // Hide if any exercise is incomplete
  }
}

// Attach event listeners to exercises
function attachExerciseListeners() {
  const textAreas = document.querySelectorAll("textarea");
  textAreas.forEach((textArea) => {
    textArea.addEventListener("input", checkIfAnyExerciseFilled);
  });
}

// Function to check if all MCQs are answered and display submit button
function checkIfAllQuestionsAnswered() {
  const totalQuestions = questions.length;
  const answeredQuestions = new Set();

  // Collect all radio buttons
  const radios = questionsContainer.querySelectorAll('input[type="radio"]');

  // Iterate over the radio buttons to check if they are selected
  radios.forEach((radio) => {
    if (radio.checked) {
      answeredQuestions.add(radio.name); // Track unique question names that have answers
    }
  });

  // Check if all questions are answered
  if (answeredQuestions.size === totalQuestions) {
    submitButton.style.display = "block"; // Display the submit button
  } else {
    submitButton.style.display = "none"; // Hide the submit button if not all questions are answered
  }
}
