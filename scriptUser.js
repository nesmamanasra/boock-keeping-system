const signUp = e => {
    let bname = document.getElementById('bname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value,
        country = document.getElementById('country').value,
        currency = document.getElementById('currency').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.bname.toLowerCase() == bname.toLowerCase()
        );

    if(!exist){
        formData.push({ bname, email, pwd, country, currency});
        localStorage.setItem('formData', JSON.stringify(formData));
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "main-page.html";
    }
    e.preventDefault();
}