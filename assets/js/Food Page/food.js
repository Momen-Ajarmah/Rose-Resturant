let itemName = document.querySelector(".itemName");
let itemPrice = document.querySelector(".itemPrice");
let itemDesc = document.querySelector(".itemDesc");

let items = [];
function addItem (){
    let item ={
        name:itemName.innerHTML,
        price:itemPrice.innerHTML,
        desc:itemDesc.innerHTML
    };
    items.push(item);
    localStorage.setItem("itemsList",JSON.stringify(items));
}
