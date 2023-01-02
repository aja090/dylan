const menu= document.getElementById ("menu");
const actions = document.getElementById ("actions");


menu.addEventListener("click", () => {
    handelmenu();
});

function handelmenu(){
   menu.classList.toggle("is-active");
   actions.classList.toggle("is-active");
}