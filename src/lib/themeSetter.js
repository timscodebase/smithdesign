export default function themeSetter() {
  let primaryColor, secondaryColor, h1Color;

  if (window.localStorage) {
    // Get LocalStorage
    primaryColor = window.localStorage.getItem("primaryColor");
    secondaryColor = window.localStorage.getItem("secondaryColor");
    h1Color = window.localStorage.getItem("h1Color");

    // Set body root variables
    document.body.style.setProperty("--primary-color", primaryColor);
    document.body.style.setProperty("--secondary-color", secondaryColor);
    document.body.style.setProperty("--h1-color", h1Color);
  }
}
