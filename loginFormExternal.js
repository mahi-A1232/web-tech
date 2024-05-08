
let signupButtonEl = document.getElementById("signupButton");
let loginButtonEl = document.getElementById("loginButton");

let signupContainerEl = document.getElementById("signupContainer");
let loginContainerEl = document.getElementById("loginContainer");

let signupUserNameEl = document.getElementById("signupUserName");

let signupUserEmailEl = document.getElementById("signupUserEmail");
let loginUserEmailEl = document.getElementById("loginUserEmail");

let signupPasswordEl = document.getElementById("signupUserPassword");
let loginUserPasswordEl = document.getElementById("loginUserPassoword");

let nameErrMsgEl = document.getElementById("nameErrMsg");

let signupEmailErrMsgEl = document.getElementById("signupEmailErrMsg");
let loginEmailErrMsgEl = document.getElementById("loginEmailErrMsg");

let signupPasswordErrMsgEl = document.getElementById("signupPasswordErrMsg");
let loginPasswordErrMsgEl = document.getElementById("loginPasswordErrMsg");

signupButtonEl.addEventListener("click",function(){
    signupContainerEl.classList.remove("d-none");
    loginContainerEl.classList.add("d-none");

    loginButtonEl.classList.remove("login-button");
    signupButtonEl.classList.remove("signup-button");

    loginButtonEl.classList.add("signup-button");   
    signupButtonEl.classList.add("login-button");
});

loginButtonEl.addEventListener("click",function(){
    signupContainerEl.classList.add("d-none");
    loginContainerEl.classList.remove("d-none");

    loginButtonEl.classList.remove("signup-button");   
    signupButtonEl.classList.remove("login-button");

    loginButtonEl.classList.add("login-button");
    signupButtonEl.classList.add("signup-button");
});

signupUserNameEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        nameErrMsgEl.textContent = "Required *";
    }
    else{
        nameErrMsgEl.textContent = "";
    }
});

signupUserEmailEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        signupEmailErrMsgEl.textContent = "Required *";
    }
    else{
        signupEmailErrMsgEl.textContent = "";
    }
});

loginUserEmailEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        loginEmailErrMsgEl.textContent = "Required *";
    }
    else{
        loginEmailErrMsgEl.textContent = "";
    }
});

signupPasswordEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        signupPasswordErrMsgEl.textContent = "Required *";
    }
    else{
        signupPasswordErrMsgEl.textContent = "";
    }
});

loginUserPasswordEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        loginPasswordErrMsgEl.textContent = "Required *";
    }
    else{
        loginPasswordErrMsgEl.textContent = "";
    }
});




signupUserNameEl.addEventListener("keydown",function(event){
    var alphaExp = /^[a-zA-Z]+$/;
    if(!event.key.match(alphaExp)){
        nameErrMsgEl.textContent = "Invalid Character!";
    }
    else{
        nameErrMsgEl.textContent = "";
    }
});

signupUserEmailEl.addEventListener("blur",function(event){
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(!event.key.match(emailExp)){
        signupEmailErrMsgEl.textContent = "Invalid Email*";
    }
    else{
        signupEmailErrMsgEl.textContent = "";
    }
});

loginUserEmailEl.addEventListener("blur",function(event){
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(!event.key.match(emailExp)){
        loginEmailErrMsgEl.textContent = "Required *";
    }
    else{
        loginEmailErrMsgEl.textContent = "";
    }
});

signupPasswordEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        signupPasswordErrMsgEl.textContent = "Required *";
    }
    else{
        signupPasswordErrMsgEl.textContent = "";
    }
});

loginUserPasswordEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        loginPasswordErrMsgEl.textContent = "Required *";
    }
    else{
        loginPasswordErrMsgEl.textContent = "";
    }
});



