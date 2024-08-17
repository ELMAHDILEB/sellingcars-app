const openNav = document.querySelector(".openNav"),
header = document.getElementById("header"),
closeNav = document.querySelector(".closeNav"),

navbarLinks = document.querySelector(".navbarLinks");



openNav.addEventListener("click",()=>{
    navbarLinks.style.transform = "translateX(0%)";
    openNav.style.display = "none";
    closeNav.style.display = "block";
});
closeNav.addEventListener("click",()=>{
    navbarLinks.style.transform = "translateX(-100%)";
    openNav.style.display = "block";
    closeNav.style.display = "none";
});

window.onscroll = () => {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add("shadowHeader");
    } else {
        header.classList.remove("shadowHeader");
    }
};



// Slider
const cards = document.querySelector(".cards"); // Container
const firstCard = document.querySelector(".card"); // card
const arrowsIcon = document.querySelectorAll(".arrowsIcon"); // icons

let isDragStart = false, prevPageX, prevScrollLeft;

// Handle arrow icon clicks for scrolling
arrowsIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        const firstCardWidth = firstCard.clientWidth;
        cards.scrollLeft += icon.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

// Handle dragging functionality
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = cards.scrollLeft; 
}

const dragStop = () => {
    isDragStart = false;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    const positionDiff = e.pageX - prevPageX;
    cards.scrollLeft = prevScrollLeft - positionDiff; 
}

// Add event listeners for dragging
cards.addEventListener("mouseup", dragStop);
cards.addEventListener("mousedown", dragStart);
cards.addEventListener("mousemove", dragging);



const filterIcon = document.querySelector(".filterIcon"),
filterSection = document.querySelector(".filterSection"),
cars = document.querySelector(".cars");

filterIcon.addEventListener("click", ()=>{
    if(filterSection.classList.contains("hidden")){
           filterSection.classList.remove("hidden");
           cars.classList.add("hidden");
           filterSection.classList.add("showPage");
    } else{
        filterSection.classList.add("hidden");
        cars.classList.remove("hidden");
        filterSection.classList.remove("showPage");
    }
    
})



