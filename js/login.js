function signUp() {

    let username =
        document.getElementById(
            "signupUsername"
        ).value.trim();


    let password =
        document.getElementById(
            "signupPassword"
        ).value;


    let confirmPassword =
        document.getElementById(
            "confirmPassword"
        ).value;


    let message =
        document.getElementById(
            "signupMessage"
        );


    if (username === "" ||
        password === "" ||
        confirmPassword === "") {

        message.innerHTML =
            "Please fill all fields.";

        message.style.color = "red";

        return;
    }


    if (password !== confirmPassword) {

        message.innerHTML =
            "Passwords do not match.";

        message.style.color = "red";

        return;
    }


    localStorage.setItem(
        "username",
        username
    );


    localStorage.setItem(
        "password",
        password
    );


    localStorage.setItem(
        "loggedIn",
        "true"
    );


    message.innerHTML =
        "Account created successfully!";

    message.style.color = "green";


    setTimeout(function() {

        window.location.href =
            "routes.html";

    }, 800);

}
