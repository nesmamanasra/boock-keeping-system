// get data of form
let  nameReceipt = document.getElementById('nameReceipt');
let  recNum = document.getElementById('recNum');
let  dateReceipt = document.getElementById('dateReceipt');

// update submit
let mood = 'create';
// store id in varibel
let globalVar ;
// create product
let dataProReceipt ;
if(localStorage.receipt != null){
    dataProReceipt = JSON.parse(localStorage.receipt)
}else{
    dataProReceipt = [];
}
submit.onclick = function(){
    let newProduct = {
        nameReceipt : nameReceipt.value.toLowerCase(),
        recNum : recNum.value,
        dateReceipt: dateReceipt.value 
    }
   
   
    //console.log(newProduct);
    if(mood === 'create'){
        dataProReceipt.push(newProduct);
    }else{
        dataProReceipt[globalVar] = newProduct;
        mood = 'create';
        
    }
    localStorage.setItem('receipt',JSON.stringify(dataProReceipt))
    showData();
}

// clear data


 // show data
 function showData(){
    let tabel = '';
    for (let i = 0 ;i < dataProReceipt.length; i++ ){
       tabel += ` 
       <tr>
       <td>${i}</td>
       <td>${dataProReceipt[i].nameReceipt}</td>
       <td>${dataProReceipt[i].recNum}</td>
       <td>${dataProReceipt[i].dateReceipt}</td>
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
    dataProReceipt.splice(i,1);
        localStorage.receipt = JSON.stringify(dataProReceipt);
        showData()
   }
//    // delete All
//    function deleteAll(){
//       localStorage.clear()
//       showData();
//    }
//function update data
function updateData(i){
    nameReceipt.value = dataProReceipt[i].nameReceipt;
    recNum.value = dataProReceipt[i].recNum;
    dateReceipt.value = dataProReceipt[i].dateReceipt;
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