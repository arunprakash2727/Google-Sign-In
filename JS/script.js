const Password = document.querySelector("#show-password");
const Checkbox = document.querySelector("#show");

Checkbox.addEventListener('change',function(){
    const type = Password.getAttribute("type")=== "password" ? "text" : "password";
    Password.setAttribute("type",type);
});