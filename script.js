// modal box 
const dialog = document.getElementById('dialog-box'); //target the dialog box using DOM 

const form = document.querySelector('submitform'); //target the form box using DOM 

const closeModal = document.getElementById('close-modal');

function openDialogbox() {
    dialog.showModal(); // to show modal box on clicking login button from nav bar
}
function closeModalBox() {
    dialog.close(); // to close modal box using close button on clicking
}
function closeMyModal() {
    dialog.close();
}

// signup modal 
const signupForm = document.getElementById('submit-Signup-form')
const openSignupModal = document.getElementById('dialog-box-signup')
const signUpButton = document.getElementById('signup-button-2')
const closeSignupModal = document.getElementById('closeSignup')

signUpButton.addEventListener('click', function () {
    openSignupModal.showModal()
})
closeSignupModal.addEventListener('click', function () {
    openSignupModal.close()
})

const goToLogin = document.querySelector('.redirect-to-login')

goToLogin.addEventListener('click', function () {
    openDialogbox();
    openSignupModal.close();
})

const goToSignup = document.querySelector('.redirect-to-signup')

goToSignup.addEventListener('click', function () {
    openSignupModal.showModal();
    closeModalBox()
})


// validate form 
signupForm.addEventListener('submit', function (e) {
    e.preventDefault()
    validate()
})

function validate() {
    let name = document.querySelector('.name')
    let username = document.querySelector('.username').value.trim()
    let email = document.querySelector('.email').value.trim()
    let password = document.querySelector('.password').value.trim()

    if (name.value.trim() === '') {
        name.style.border = '1px solid red'
    } else {

        name.style.border = '1px solid green'
    }
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

const toggleButton = document.querySelector('.toggle')
        const closeButton = document.querySelector('.closeBar')
        toggleButton.addEventListener('click', function () {
            const sideBar = document.querySelector('.slider')
            sideBar.style.display = 'flex';
        })
        closeButton.addEventListener('click', function () {
            const sideBar = document.querySelector('.slider')
            sideBar.style.display = '';
        })

// login validation



