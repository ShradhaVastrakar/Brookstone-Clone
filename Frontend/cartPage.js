

let container = document.querySelector(".cart-container")
let cart = JSON.parse(localStorage.getItem("cart-list")) || []
let deleted = JSON.parse(localStorage.getItem("Deleted"))||[];
// console.log(cart)
let totalItem = document.getElementById("cart-no-total")
let totalCart = document.getElementById("cart-total")

let sum = 0;
function findingTotal(cart){
    for (let i = 0; i < cart.length; i++) {
      sum += +cart[i].price;
    }
    return sum;
  }
  let totalSum = findingTotal(cart)
  totalCart.innerText =totalSum


function showUser() {
    container.innerHTML = null;
    totalItem.innerText = cart.length
    cart.forEach((element, index) => {

        if (element.email === localStorage.email) {
            let card = document.createElement("div");
            let image = document.createElement("img")
            image.setAttribute("src", element.image);

            let id = document.createElement("h3")
            id.innerText = element.id;

            let description = document.createElement("h3");
            description.innerText = element.description;

            let price = document.createElement("h2");
            price.innerText = `Rs. ${element.price}`;

            let addtoCart = document.createElement("button");
            addtoCart.innerText = "Delete";

            addtoCart.addEventListener("click", ()=>{
                deleted.push(cart)
                localStorage.setItem("Deleted",JSON.stringify(cart));
                cart.splice(index, 1);
                totalCart.innerText = totalSum - element.price
                localStorage.setItem("cart-list", JSON.stringify(cart))
                showUser()

            })


            card.append(image, id, description, price, addtoCart)
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

let checoutpage = document.querySelector("#checkout-btn")
checoutpage.addEventListener("click", () =>{
    localStorage.setItem("totalSum",totalSum)
    window.location.href = "checkout.html"
})
