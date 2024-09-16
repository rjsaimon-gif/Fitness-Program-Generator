function displayProgram(response) {
  new Typewriter("#program", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  }).start();
}

async function generateProgram(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7a8aacadf32fc08tff87b375486o409c";
  let prompt = `User's instructions: please generate a concise fitness program about ${instructionsInput.value} avoiding paragraphs and using bullet points or numbered lists instead.`;
  let context = `your mission is to generate a fitness program following the user's instructions. please be sure to provide response that is legible, organized, and easy to follow in HTML format. Remove html in heading. 
  `;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let programElement = document.querySelector("#program");
  programElement.classList.remove("hidden");
  programElement.innerHTML = `<div class="generating"> ⏳ Generating a fitness program for you... </div> `;

  axios.get(apiURL).then(displayProgram);
}

let programFormElement = document.querySelector("#program-generator-form");
programFormElement.addEventListener("submit", generateProgram);
