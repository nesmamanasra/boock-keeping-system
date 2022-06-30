let entery=document.getElementById("entery");
entery.addEventListener("click",displayDetails);
var row =1;
function displayDetails(){
    let name = document.getElementById("name").value;
    let money = document.getElementById("money").value;
    let date = document.getElementById("date").value;

    if(!name||!money||!date){
        alert("Please fill all the boxes");
        return;
        }
    let display=document.getElementById("display");
    let newRow =display.insertRow(row);
    
    let cell1=newRow.insertCell(0);
    let cell2=newRow.insertCell(1);
    let cell3=newRow.insertCell(2);

    cell1.innerHTML=name;
    cell2.innerHTML=money;
    cell3.innerHTML=date;
    row++;
}
