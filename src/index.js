function displayRecipe(response) {}
console.log();
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9faada74e0td93b882032b77odf27ad4";
  let prompt = "Generate a vegetarian recipe";
  let context = "";
  let apiUrl =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";

  new Typewriter("#recipe", {
    strings: "Generating vegetarian recipe...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
