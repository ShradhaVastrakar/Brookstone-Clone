
let container = document.querySelector(".product-apis")
let fetchedData = [];

window.addEventListener("load" , () =>{
    fetch("http://localhost:8000/api/")
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
    data.forEach((element) => {
       let card = document.createElement("div");
       let image = document.createElement("img")
       image.setAttribute("src",element.image);

       let id = document.createElement("h3")
       id.innerText = element.id;

       let description = document.createElement("h3");
       description.innerText = element.description;

       let rs = document.createElement("p")
       rs.innerText = "Rs."

       let price = document.createElement("h2");
       price.innerText = element.price;

       let addtoCart = document.createElement("button");
       addtoCart.innerText = "Add to Cart";



       card.append(image,id,description,rs,price,addtoCart)
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

