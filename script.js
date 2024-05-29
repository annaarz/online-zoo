const popUp = document.querySelector('.pop-up');
const openButton = document.querySelector('.button');
const closeButton = document.querySelector('.close');

openButton.addEventListener('click', () => {
    popUp.classList.add('visible');
})

closeButton.addEventListener('click', () => {
    popUp.classList.remove('visible');
})

popUp.addEventListener('click', (event) => {
    if(event.target === popUp){
       popUp.classList.remove('visible'); 
    }
    
})