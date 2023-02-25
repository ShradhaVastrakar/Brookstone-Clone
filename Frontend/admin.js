

let userbtn = document.getElementById("user-btn");
userbtn.addEventListener("click", () =>{
    window.location.href = "userPage.html"
})

let productPage = document.querySelector("#product-btn")

productPage.addEventListener("click", () =>{
    window.location.href = "allProduct.html"
})

let logOut = document.querySelector("#logout-btn");
logOut.addEventListener("click", () =>{
    window.location.href = "signIn.html"
})