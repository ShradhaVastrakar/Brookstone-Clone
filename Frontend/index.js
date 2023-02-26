const MassagePopup = () => {
    document.querySelector(".massage-dropdown").classList.remove("hidden");
}

const Massageleave = () => {
    document.querySelector(".massage-dropdown").classList.add("hidden");
}

const WellnessPopup = () =>{
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

$('#slick1').slick({
    rows: 1,
    dots: false,
    arrows: false,
    autoplay:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('#featureSlide').slick({
    rows: 1,
    dots: false,
    arrows: false,
    autoplay:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
});


$('.best-sellers-slider').slick({
    rows: 1,
    dots: false,
    arrows: false,
    autoplay:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3
});


let SignUp_Page = document.getElementById("user-icon");
SignUp_Page.addEventListener("click",()=>{

    if(localStorage.getItem("isLogin")){
        window.location.href = "account.html"
    }else{
        window.location.href = "signIn.html";
    }
})


let productPage = document.getElementById("new-product-page")

productPage.addEventListener("click", () =>{
    window.location.href = "product.html"
})

let cartIcon = document.getElementById("cart-icon")

cartIcon.addEventListener("click", () =>{
    window.location.href = "cartPage.html"
})