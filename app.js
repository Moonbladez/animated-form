function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-alt-right");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            //check validation
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm)
            } else if (input.type === "password" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease"
            }

            //GET RID OF ANIMATION
            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            })
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        error("#e00000", "please enter 6 or more characters");
        //TODO ERROR
    } else {
        ("#42dc42");
        return true;
    }
}

function validateEmail(email) {
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validation.test(email.value)) {
        ("#42dc42");
        return true;
    } else {
        error("#e00000", "please enter a valid email address");

    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
    document.body.style.backgroundColor = "#42dc42"
    document.getElementById("error__msg").textContent = "";

}



function error(color, message) {
    document.body.style.backgroundColor = color;
    document.getElementById("error__msg").textContent = message;
}





animatedForm();