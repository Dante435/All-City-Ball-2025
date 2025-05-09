// Script for the navigation menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Theme Changer code
let themePreference ={
  theme: "dark"
};

const storedTheme =localStorage.getItem("themePreference");

if(storedTheme){ //this checks the local storage data that we set as these variables
  themePreference = JSON.parse(storedTheme);
};

document.querySelector(`input[value="${themePreference.theme}"]`).checked = true;/* back tick(``) =jvscript */

function updateThemePreference(){
  const theme = document.querySelector('input[name="theme"]:checked').value;/*"string" Space sensitive* */ //This line calls the html the (checkediput)
  themePreference.theme = theme;//calls the theme line-2
  localStorage.setItem("themePreference", JSON.stringify(themePreference));//So this line inputs the themePreference to localStorage, (JSON.stringify() this translates)
  updateTheme();

}

document.querySelectorAll('input[name="theme"]').forEach((themeOption)=>{ // this makes the change on input
themeOption.addEventListener("change", updateThemePreference)
}) 
function updateTheme(){ // this 
  const body = document.querySelector("body");

  if(themePreference.theme === "dark"){
      body.classList.add("dark-theme");
  }
  else{
      body.classList.remove("dark-theme");
  }

}
updateTheme()
  
  // setTimeout(() => {
  //   loader.classList.add("fade-out", "slide-out-bottom");

  //   // Remove the preloader after the animation ends
  //   setTimeout(() => {
  //     loader.style.display = "none";
  //   }, 500); // Match the CSS animation duration
  // }, 500); // Initial delay (2s)


