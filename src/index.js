// Import fuctions that control changes in the DOM
import {initialState, homepage, menuPage, contactPage, sidebarContent, generate_initialDivs} from './domFunctions';

// Stablish itinial State
initialState();

// Control the State of the dinamic display
let dinamicDisplay = document.querySelector(".main_dinamic"),
    button1 = document.querySelector("#but_home"),
    button2 = document.querySelector("#but_menu"),
    button3 = document.querySelector("#but_contact");

function displayState(state) {
  if (state == 1) {
    dinamicDisplay.innerHTML = "";
    homepage();

    button1.classList.add("main_information_toggle");
    button2.classList.remove("main_information_toggle");
    button3.classList.remove("main_information_toggle");

  } else if (state == 2){
    dinamicDisplay.innerHTML = "";
    menuPage();

    button1.classList.remove("main_information_toggle");
    button2.classList.add("main_information_toggle");
    button3.classList.remove("main_information_toggle");

  } else if (state == 3){
    dinamicDisplay.innerHTML = "";
    contactPage();
    
    button1.classList.remove("main_information_toggle");
    button2.classList.remove("main_information_toggle");
    button3.classList.add("main_information_toggle");
  }
}

// Add event listener to buttons
// .bind(this) is necesary to not call the fuction when is just declared
button1.addEventListener("click", displayState.bind(this, 1));
button2.addEventListener("click", displayState.bind(this, 2));
button3.addEventListener("click", displayState.bind(this, 3));

