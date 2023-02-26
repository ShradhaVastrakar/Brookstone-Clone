
let container = document.querySelector(".product-apis")
let add = JSON.parse(localStorage.getItem("cart-list"))||[]
let email_localStorage =localStorage.email;
let fetchedData = [];

window.addEventListener("load" , () =>{
    fetch("https://calm-erin-caterpillar-shoe.cyclic.app/api/")
    .then(response => response.json())
    .then(actualData => {
      // Do something with the data
      fetchedData = actualData
      console.log(actualData);
      displayProducts(actualData)
    })
    .catch(error => {
      console.error(error);
    });
})

function displayProducts(data){
    container.innerHTML = null; 
    // console.log('data', data)
    data.forEach((element) => {
       let card = document.createElement("div");
       let image = document.createElement("img")
       image.setAttribute("src",element.image);

       let id = document.createElement("h3")
       id.innerText = element.id;

       let description = document.createElement("h3");
       description.innerText = element.description;

  
       let price = document.createElement("h2");
       price.innerText = `Rs. ${element.price}`;

       let addtoCart = document.createElement("button");
       addtoCart.innerText = "Add to Cart";

       let email = document.createElement("p");
       email.innerText = localStorage.email;

    //    paragraph_text = ' '.join(p.text for p in soup.find_all('p'))
        console.log('email', email_localStorage)
       addtoCart.addEventListener("click" , () =>{
        if(!localStorage.token){
           alert("Please Login First !!")
        }else{
            alert("Added to the Cart")
            add.push({...element, email: email_localStorage })
            localStorage.setItem("cart-list",JSON.stringify(add))
        }
       
       })

       card.append(image,id,description,price,addtoCart)
       container.append(card)
    });
  }


  const MassagePopup = () => {
    document.querySelector(".massage-dropdown").classList.remove("hidden");
}

const Massageleave = () => {
    document.querySelector(".massage-dropdown").classList.add("hidden");
}

const WellnessPopup = () => {
    document.querySelector(".wellness-dropdown").classList.remove("hidden");
}

const Wellnessleave = () => {
    document.querySelector(".wellness-dropdown").classList.add("hidden");
}

const SleepPopup = () => {
    document.querySelector(".sleep-dropdown").classList.remove("hidden");
}
const Sleepleave = () => {
    document.querySelector(".sleep-dropdown").classList.add("hidden");
}

logo.addEventListener("click", ()=>{
    window.location.href = "index.html"
})

let selectedPrice;
let lower, upper;
const filterProduct50_100 = document.querySelector('.fityToHund').addEventListener('click', () =>{
    selectedPrice = '50-100';
    lower = 50, upper = 100;
    filterData();

    console.log(selectedPrice)
});
const filterProduct100_150 = document.querySelector('.hundToOnefity').addEventListener('click', () =>{
    selectedPrice = '100-150';
    lower = 100, upper = 150;
    filterData();
    console.log(selectedPrice)
});
const filterProduct150_200 = document.querySelector('.oneFiftyToTwoHund').addEventListener('click', () =>{
    selectedPrice = '150-200';
    lower = 150, upper = 200;
    filterData();
    console.log(selectedPrice)
});
const filterProduct200_250 = document.querySelector('.twoHundToTwoFifty').addEventListener('click', () =>{
    selectedPrice = '200-250';

    lower = 200, upper = 250;
    filterData();
    console.log(selectedPrice)
});
const filterProduct300_500 = document.querySelector('.ThreeHundToFiveHund').addEventListener('click', () =>{
    selectedPrice = '300-500';
    lower = 300, upper = 500;
    console.log(selectedPrice)
    filterData();
});
const filterProductAbove500 = document.querySelector('.abveFiveHund').addEventListener('click', () =>{
    selectedPrice = '>500';
    lower = 500, upper = Infinity;
    console.log(selectedPrice)
    filterData();
});
console.log(selectedPrice)
console.log(fetchedData)
// const filterProduct = fetchedData.filter(elem => elem.)

const filterData = () => {
    console.log('called')
    const filterData = fetchedData.filter((elem) => elem.price > lower && elem.price < upper );
    console.log("filterData"  , filterData)
    displayProducts(filterData)
}

let SignUp_Page = document.getElementById("user-icon");
SignUp_Page.addEventListener("click",()=>{

    if(localStorage.getItem("isLogin")){
        window.location.href = "account.html"
    }else{
        window.location.href = "signIn.html";
    }
})


let cartIcon = document.getElementById("cart-icon")

cartIcon.addEventListener("click", () =>{
    window.location.href = "cartPage.html"
})




