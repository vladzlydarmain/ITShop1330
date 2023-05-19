const mainButton = document.querySelector('.name-button');
const catalogeButton = document.querySelector('.cataloge');
const basketButton = document.querySelector('.basket');
const aboutusButton = document.querySelector('.aboutus');
const welcomeButton = document.querySelector(".welcome-button");

function redirect(){
    if (this.innerHTML.includes('img')){
        window.location.href = "/";
    }
    if (this == welcomeButton){
        window.location.href = "/cataloge";
    }
    else{
        window.location.href = `/${this.classList[1].replace('.', '')}`
    }
}

mainButton.addEventListener('click', redirect);
catalogeButton.addEventListener('click', redirect);
basketButton.addEventListener('click', redirect);
aboutusButton.addEventListener('click', redirect);
welcomeButton.addEventListener("click", redirect)