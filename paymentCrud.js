// get data of form
let  namePayment = document.getElementById('namePayment');
let  payNum = document.getElementById('payNum');
let  datePayment = document.getElementById('datePayment');

// update submit
let mood = 'create';
// store id in varibel
let globalVar ;
// create product
let dataPro ;
if(localStorage.payment != null){
    dataPro = JSON.parse(localStorage.payment)
}else{
    dataPro = [];
}
submit.onclick = function(){
    let newProduct = {
        namePayment : namePayment.value.toLowerCase(),
        payNum : payNum.value,
        datePayment: datePayment.value 
    }
   
   
    //console.log(newProduct);
    if(mood === 'create'){
        dataPro.push(newProduct);
    }else{
        dataPro[globalVar] = newProduct;
        mood = 'create';
        
    }
    localStorage.setItem('payment',JSON.stringify(dataPro))
    showData();
}

// clear data


 // show data
 function showData(){
    let tabel = '';
    for (let i = 0 ;i < dataPro.length; i++ ){
       tabel += ` 
       <tr>
       <td>${i}</td>
       <td>${dataPro[i].namePayment}</td>
       <td>${dataPro[i].payNum}</td>
       <td>${dataPro[i].datePayment}</td>
       <td><button onclick='updateData(${i})' id="Update">Update</button></td>
       <td><button onclick='deleteData(${i})' id="Delete">Delete</button></td>
   </tr>
   `
    };
    document.getElementById('tbody').innerHTML = tabel;
         // show delete all btn 
        //  let deleteData = document.getElementById('deleteAll');
        //  if(dataPro.length > 1){
        //     deleteData.innerHTML = `
        //     <td><button onclick='deleteAll()'>Delete All (${dataPro.length})</button></td>
        //     `
        //  }else{
        //     deleteData.innerHTML = '';
        //  }
   }
   showData()

   // delete
   function deleteData(i){
        dataPro.splice(i,1);
        localStorage.payment = JSON.stringify(dataPro);
        showData()
   }
//    // delete All
//    function deleteAll(){
//       localStorage.clear()
//       showData();
//    }
//function update data
function updateData(i){
    namePayment.value = dataPro[i].namePayment;
    payNum.value = dataPro[i].payNum;
    datePayment.value = dataPro[i].datePayment;
    submit.innerHTML='update data';
    mood = 'update';
    globalVar = i;
    scroll({
        top : 0,
        // slowly scroll
        behavior: 'smooth',
    })
    showData();
}