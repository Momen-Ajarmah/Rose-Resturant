var allOrders = []
allOrders = JSON.parse(localStorage.getItem("coursesList"));


// function displayOrder(){
//     var result="";
//     for(var i = 0;i<allOrders.length;i++){
//         result+=`
//         <div class="orderItem ">
//                 <h3>${allOrders[i].name}</h3>
//                 <img src="assets/images/Home page/1.jpg" class=" rounded-2 my-3" alt="">
//                 <p class="form-control">${allOrders[i].price}</p>
//                 <div class="edit-order mb-3">
//                   <button type="button" class="btn btn-danger">Delete</button>
//                   <button type="button" class="btn btn-primary">Update</button>
//                 </div>
//         `
       
//     }
//     data.innerHTML=result;
// }
console.log(coursesList);