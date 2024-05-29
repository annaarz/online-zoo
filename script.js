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
    if (event.target === popUp) {
        popUp.classList.remove('visible');
    }
}

function addTouchEventHandlers(element, handler) {
    element.addEventListener('click', handler);
    element.addEventListener('touchend', (event) => {
        event.preventDefault();  // Предотвращает двойное срабатывание на некоторых устройствах
        handler(event);
    });
}

// Обработчики для кнопок открытия и закрытия
addTouchEventHandlers(openButton, showPopUp);
addTouchEventHandlers(closeButton, hidePopUp);

// Обработчик для клика по всплывающему окну
addTouchEventHandlers(popUp, handlePopUpClick);
