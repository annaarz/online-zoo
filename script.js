const popUp = document.querySelector('.pop-up');
const openButton = document.querySelector('.button');
const closeButton = document.querySelector('.close');

// openButton.addEventListener('click', () => {
//     popUp.classList.add('visible');
// })

// closeButton.addEventListener('click', () => {
//     popUp.classList.remove('visible');
// })

// popUp.addEventListener('click', (event) => {
//     if(event.target === popUp){
//        popUp.classList.remove('visible'); 
//     }
    
// })

function showPopUp() {
    popUp.classList.add('visible');
}

function hidePopUp() {
    popUp.classList.remove('visible');
}

function handlePopUpClick(event) {
    if(event.target === popUp){
       popUp.classList.remove('visible'); 
    }
}

// Обработчики для кнопок открытия и закрытия
openButton.addEventListener('click', showPopUp);
openButton.addEventListener('touchstart', showPopUp);

closeButton.addEventListener('click', hidePopUp);
closeButton.addEventListener('touchstart', hidePopUp);

// Обработчик для клика по всплывающему окну
popUp.addEventListener('click', handlePopUpClick);
popUp.addEventListener('touchstart', handlePopUpClick);
