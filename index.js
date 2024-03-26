const readMoreBtn1 = document.querySelector('.readMoreBtn1');
const readMore1 = document.querySelector('.readMore1');
const icon1 = document.getElementById("dropDown1");

readMoreBtn1.onclick = function() {
    if (readMore1.style.display === "none") {
        readMore1.style.display = "block";
        icon1.classList.remove("fa-chevron-circle-down");
        icon1.classList.add("fa-chevron-circle-up");
    } 
    else {
        readMore1.style.display = "none";
        icon1.classList.remove("fa-chevron-circle-up");
        icon1.classList.add("fa-chevron-circle-down");
    }
}


const readMoreBtn2 = document.querySelector('.readMoreBtn2');
const readMore2 = document.querySelector('.readMore2');
const icon2 = document.getElementById("dropDown2");
readMoreBtn2.onclick = function() {
    if (readMore2.style.display === "none") {
        readMore2.style.display = "block";
        icon2.classList.remove("fa-chevron-circle-down");
        icon2.classList.add("fa-chevron-circle-up");
    } 
    else {
        readMore2.style.display = "none";
        icon2.classList.remove("fa-chevron-circle-up");
        icon2.classList.add("fa-chevron-circle-down");
    }
}