const popupBtn = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('#close-btn');
const firstDropDownBtn = document.querySelector('.drop-down');
const firstDrop = document.querySelector('.first-drop');
const secDropDownBtn = document.querySelector('.drop-down2');
const secondDrop = document.querySelector('.second-drop');
// console.log(secondDrop)


// To open the popup on the page
popupBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

// To close-up the popup
closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// To open&close the first-drop-down nav
firstDropDownBtn.addEventListener('click', () => {
    if(firstDrop.classList.contains('hidden')){
        firstDrop.classList.remove('hidden');
    } else {
        firstDrop.classList.add('hidden');
    };
});

// To open&close the second-drop-down nav
secDropDownBtn.addEventListener('click', () => {
    if(secondDrop.classList.contains('hidden')){
        secondDrop.classList.remove('hidden');
    } else {
        secondDrop.classList.add('hidden');
    };
});