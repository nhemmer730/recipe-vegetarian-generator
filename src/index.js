function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9faada74e0td93b882032b77odf27ad4";
  let context = `You are a vegetarian food expert and write clear, quick recipes for the user. Start the Instructions on a new line after the ingredients. Make sure to follow the user instructions.`;
  let prompt = `User instructions: Generate a step-by-step vegetarian recipe about ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
