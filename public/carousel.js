const nextIcon = `<div class="text-center flex justify-center"><svg class="w-8 h-8 text-white text-center" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg></div>`;

const prevIcon = `<div class="flex justify-center"><svg class="w-8 h-8 text-white text-center" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg></div>`;


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    autoplay: true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
    },
});