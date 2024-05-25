document.addEventListener("DOMContentLoaded", function() {
    
    var sobreButton = document.querySelector('.nav-itens li:nth-child(2) a');

    var descricaoParagrafo = document.querySelector('.aboutusparagraph');

    sobreButton.addEventListener('click', function() {
        descricaoParagrafo.scrollIntoView({ behavior: 'smooth' });
    });
});


// teste 

// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// fim teste