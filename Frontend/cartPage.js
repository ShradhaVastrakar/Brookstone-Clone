

let container = document.querySelector(".cart-container")
let cart = JSON.parse(localStorage.getItem("cart-list")) || []
// console.log(cart)



function showUser() {

    cart.forEach((element, index) => {
        if (element.email === localStorage.email) {
            let card = document.createElement("div");
            let image = document.createElement("img")
            image.setAttribute("src", element.image);

            let id = document.createElement("h3")
            id.innerText = element.id;

            let description = document.createElement("h3");
            description.innerText = element.description;

            let rs = document.createElement("p")
            rs.innerText = "Rs."

            let price = document.createElement("h2");
            price.innerText = element.price;

            let addtoCart = document.createElement("button");
            addtoCart.innerText = "Delete";


            card.append(image, id, description, rs, price, addtoCart)
            container.append(card)
        }
    })

}

showUser()



let productPage = document.getElementById("new-product-page")

productPage.addEventListener("click", () => {
    window.location.href = "product.html"
})


let SignUp_Page = document.getElementById("user-icon");
SignUp_Page.addEventListener("click", () => {

    if (localStorage.getItem("isLogin")) {
        window.location.href = "account.html"
    } else {
        window.location.href = "signIn.html";
    }

})

let logo = document.querySelector("#logo")
   logo.addEventListener("click", ()=>{
    window.location.href = "index.html"
})

