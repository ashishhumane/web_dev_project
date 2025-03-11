// modal box 
const dialog = document.getElementById('dialog-box'); //target the dialog box using DOM 

const form = document.querySelector('submitform'); //target the form box using DOM 

const closeModal = document.getElementById('close-modal');

const signup = document.getElementsByClassName('nav-button')

function openDialogbox() {
    dialog.showModal(); // to show modal box on clicking login button from nav bar
}
function closeModalBox() {
    dialog.close(); // to close modal box using close button on clicking
}
function closeMyModal() {
    dialog.close();
}

// rating

document.addEventListener("DOMContentLoaded", function () {
    // Loop through all vendor cards (1 to 8)
    for (let i = 1; i <= 8; i++) {
        const stars = document.querySelectorAll(`input[name="rating-${i}"]`);
        const finalRating = document.getElementById(`rating-display-${i}`);

        stars.forEach((star) => {
            star.addEventListener("change", function () {
                const selectedRating = this.value; // Get selected rating
                updateFinalRating(finalRating, selectedRating);
            });
        });
    }

    function updateFinalRating(element, rating) {
        let starsDisplay = "★".repeat(rating) + "☆".repeat(5 - rating);
        element.innerHTML = `${starsDisplay} <span>(${rating}/5)</span>`;
    }
});


// sideBar 
function openSideBar() {
    const sideBar = document.querySelector('.slider');
    sideBar.style.display = 'flex'
}
function closeSideBar() {
    const sideBar = document.querySelector('.slider');
    sideBar.style.display = 'none'
}

// login validation
const username = document.querySelector('.input1')
const password = document.querySelector('.input2')

validateForm(){
    if(username == ''){
        alert("enter username")
    }
}

