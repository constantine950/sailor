const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const popupHide = document.querySelector('.popup-hide');

popup.addEventListener('click', () => {
    popupContent.classList.toggle('hidden');
});

popupHide.addEventListener('click', () => {
    popupContent.classList.toggle('hidden');
});


class Dropdown{
    constructor(container){
        this.container = container,
        this.trigger = container.querySelector('.trigger'),
        this.content = container.querySelector('.content')
    }
    init(){
        this.trigger.addEventListener('click', () => {
            if(this.content.classList.contains('hidden')){
                this.content.classList.remove('hidden');
            } else {
                this.content.classList.add('hidden')
            };
        });
    };
};

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});