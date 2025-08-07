var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 2,
});


const droplist = document.querySelector(".drop-list");
const btn = document.querySelector("#categories");
btn.addEventListener("click", () => {
  droplist.classList.toggle("hidden");
  droplist.style = "transition:.3s";
});

const btn1=document.querySelector('#btn-1')
const btn2=document.querySelector('#btn-2')
const price=document.querySelector('#price')

btn1.addEventListener('click',()=>{
  price.textContent='26.00'
})

btn2.addEventListener('click',() =>{
price.textContent='30.00'
})

const cards = {
  redbag: 'assets/images/accessories-leather-bag-1.jpg',
  purplebag: 'assets/images/leather.jpg',
  yellowbag: 'assets/images/leather3.jpg',

}
const redbtn = document.querySelector('#red')
const purplebtn = document.querySelector('#purple')
const yellowbtn = document.querySelector('#yellow')
const imgCart = document.querySelector('#img-card')

redbtn.addEventListener('click', () => {
  imgCart.setAttribute('src', cards.purplebag)
})

purplebtn.addEventListener('click', () => {
  imgCart.setAttribute('src', cards.redbag)
})

yellowbtn.addEventListener('click', () => {
  imgCart.setAttribute('src', cards.yellowbag)
})

const btn3=document.querySelector('#btn3')
const btn4=document.querySelector('#btn4')
const price2=document.querySelector('.price2')
btn3.addEventListener('click',()=>{
  price2.textContent='out of stock'
})

