const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

/*const modal = document.getElementById('modal');
const button = document.getElementById('btns');
const close = document.getElementById('close');

button.addEventListener('click', () => {
    modal.style.display = 'block';
})

close.addEventListener('click', () => {
    modal.style.display = 'none';
})*/

/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/

/*let toggled = false;
function toggleButton(){
    if(!toggled){
        toggled = true;
        document.getElementById('modal').style.display = 'none'
        return;
    }
    if(toggled) {
        toggled = false;
        document.getElementById('modal').style.display = 'block'
        return;
    }
}*/

