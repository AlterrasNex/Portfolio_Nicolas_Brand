let i = 0 


function hiddenUp() {
    document.querySelector(".hidden-down").classList.add("hidden-up");
    document.querySelector(".content-hidden").classList.remove("content-hidden");
    document.querySelector(".content-hidden").classList.add("content");
}

const buttons = document.querySelectorAll('.roll-down');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetDiv = document.getElementById(targetId);

    // "" pour le premiers clic où left n'a pas de valeur
    if (targetDiv.style.display === "none" || targetDiv.style.display === 
"") {
      targetDiv.style.display = "flex";
    } else {
      targetDiv.style.display = "none";
    }
  });
});



const burgerIcon = document.querySelector('img');
const nav = document.querySelector('ul');

burgerIcon.addEventListener('click', () => {
  
  if (nav.style.left === "-100%" || nav.style.left === "") {
    nav.style.left = "0%";
  } else if (nav.style.left ="0%") {
    nav.style.left = "-100%";
  }
  
});

const navChoices = document.querySelectorAll('.dropdown');

navChoices.forEach(navChoice => {
  navChoice.addEventListener('click', () => {
    nav.style.left = "-100%";
  });
  
});

