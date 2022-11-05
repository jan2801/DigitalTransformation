var signUp = document.querySelector("#signup-form");

signUp.addEventListener("submit", (e) => {
    var p1 = signUp.querySelector("input[name='password']");
    var p2 = signUp.querySelector("input[name='password-confirm']");

    if (p1.value != p2.value) {
        e.preventDefault();
        var warning = document.createElement('div');
        warning.setAttribute('class', 'form__warning');
        warning.innerText = 'Пароли не совпадают!';
        p2.after(warning);
    }
})
