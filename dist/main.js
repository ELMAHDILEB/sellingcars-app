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



const images = [
    {
        src: "../images/road1.jpg",
        title: "Explore the World of Cars",
        description: "Discover the latest models and specifications, compare offers, and get the best deal.",
        carImage: "../images/car5.png"
    },
    {
        src: "../images/road2.jpg",
        title: "Experience the Thrill",
        description: "Unleash the power of the latest models and feel the excitement.",
        carImage: "../images/car6.png"
    },
    {
        src: "../images/road.png",
        title: "Find Your Dream Car",
        description: "Explore our wide range of vehicles and choose the one that's perfect for you.",
        carImage: "../images/car7.png"
    }
];

let currentIndex = 0;

function changeSlide() {
    currentIndex = (currentIndex + 1) % images.length;

    document.getElementById('sliderImage').src = images[currentIndex].src;
    document.getElementById('sliderTitle').innerHTML = images[currentIndex].title;
    document.getElementById('sliderDescription').innerHTML = images[currentIndex].description;
   
}

setInterval(changeSlide, 5000); // Change slide every 5 seconds


const mainImage = document.querySelector(".imageSlides img");

// Function to change the src of the main image
function changeImg(imageSrc) {
    mainImage.src = `../images/${imageSrc}`;
}


document.addEventListener('DOMContentLoaded', () => {
    function handleTabSwitch(event) {
        const targetTab = event.target.getAttribute('data-tab');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });

        // Show the selected tab content
        const selectedContent = document.getElementById(targetTab);
        if (selectedContent) {
            selectedContent.classList.remove('hidden');
        }

        // Update the active tab button style
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.add('text-black');
            button.classList.remove('text-red-600');
        });
        event.target.classList.add('text-red-600');
        event.target.classList.remove('text-black');
    }

    // Add event listeners to tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', handleTabSwitch);
    });

    // Optionally, activate the first tab by default
    const firstTab = document.querySelector('.tab-button');
    if (firstTab) {
        firstTab.click(); // Simulates a click to activate the first tab
    }
});





