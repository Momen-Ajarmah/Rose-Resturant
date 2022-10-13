var price = document.querySelector(".price");
var pastaName = document.querySelector(".pastaName");
var pastaImg = document.querySelector(".pastaImg");
var addBtn = document.querySelector(".addBtn");

var allOrders=[]

 addBtn.onclick = function(){
    addorder();
    // alert("hhh");
   
}

function addorder(){
        var order={
        name:pastaName.innerHTML,
        price:price.innerHTML,
        // img:pastaImg.src
    };
    allOrders.push(order);
    localStorage.setItem("orderList",JSON.stringify(allOrders));
}


console.log(orderList);
