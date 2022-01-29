const navmenu = document.querySelector(".links");
const menuicon = document.getElementById("menu");
const searchicon = document.getElementById("search");
const searchbox = document.querySelector(".search-box");
const togglebtns = document.querySelectorAll(".toggle");
const addtocartBtn = document.querySelectorAll(".btn");
const cartDiv = document.querySelector(".shopbag-list");
const shopBagTable = document.querySelector(".shopbag-tb");
const item = document.querySelector(".item");

let cartImg;
let itemName;
let itemprice;

menuicon.addEventListener("click", () => {
  navmenu.classList.toggle("active");
});

searchicon.addEventListener("click", () => {
  searchbox.classList.toggle("active");
});


const links = document.querySelectorAll(".navlinks");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navmenu.classList.remove("active");
  });
});
togglebtns.forEach(function (togglebtn) {
  //   console.log(togglebtns);
  togglebtn.addEventListener("click", () => {
    togglebtn.parentElement.classList.toggle("active");
  });
});

let count = 0;

addtocartBtn.forEach((eachBtn) => {
  eachBtn.addEventListener("click", (e) => {
    itemName = e.target.previousElementSibling.previousElementSibling.innerText;
    itemprice = e.target.previousElementSibling.innerText;
    numItemPrice = Number(itemprice.slice(1));
    cartImg =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.src;
    
    if (e.target.innerText === "ADD TO CART") {
      let countUpdate = ++count;
      e.target.innerText = "CANCEL ORDER";
      item.innerText = countUpdate;
      
      var tr = document.createElement("tr");
      tr.classList.add("shopitems");
      tr.innerHTML = ` <td>
              <div class="item-info">
                <img src=${cartImg} class="cart-img" />
                <div>
                  <p class="item-name">${itemName}</p>
                  <small class="item-price">${numItemPrice}</small>
                </div>
              </div>
            </td>
            <td class="price">$<span class="realAmount">${numItemPrice}</span></td>`;
      shopBagTable.appendChild(tr);
      
    } else if (e.target.innerText === "CANCEL ORDER") {
      countUpdate = --count;
      e.target.innerText = "ADD TO CART";
      
      const shopitem = shopBagTable.children;

      const [tbody, trow] = shopitem;
      const [rowPrice] = trow.lastElementChild.children;
      // console.log(rowPrice.innerText);
      if (Number(rowPrice.innerText) === numItemPrice) trow.remove();
      
      if (countUpdate === 0) {
        item.innerText = "";
      } else {
        item.innerText = countUpdate;
      }
    }
  });
});

function showCartItem() {
  cartDiv.classList.toggle("show");
}
