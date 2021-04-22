export default function themeSwitcher(primaryColor, secondaryColor, h1Color) {
  // Set LocalStorage
  if (window.localStorage) {
    window.localStorage.setItem("primary-color", JSON.stringify(primaryColor));
    window.localStorage.setItem(
      "secondary-color",
      JSON.stringify(secondaryColor)
    );
    window.localStorage.setItem("h1-color", JSON.stringify(h1Color));
  }

  // Set body root variables
  document.body.style.setProperty("--primary-color", primaryColor);
  document.body.style.setProperty("--secondary-color", secondaryColor);
  document.body.style.setProperty("--h1-color", h1Color);
}
