let  fromDate = document.getElementById("fromDate");
let  toDate = document.getElementById("toDate");
let balanceSheet=document.getElementById("balance");
balanceSheet.addEventListener("click",BalanceSheet);
function BalanceSheet(){
    if (fromDate.value >= toDate.value) {
        alert("date From is not allowed to be smaller than date to")
    }
    let ReceptSum=0;
    let PaymentSum=0;
    let payment=JSON.parse(localStorage.getItem('payment'));
    let receipt=JSON.parse(localStorage.getItem('receipt'));
    let userTableData = ``;
    for( const pay of payment ){
      if(!(pay.datePayment<fromDate.value))
      {  if(!(pay.datePayment>toDate.value)){
        PaymentSum=PaymentSum+parseInt(pay.payNum);
            userTableData += `
                <tr>
                    <td>${pay.namePayment}</td>
                    <td>${pay.payNum}</td>
                </tr>
            `;  
      }
   }document.getElementById('balanceTable').innerHTML = userTableData;
}
   for(const rec of receipt){
    let userTableData = ``;
    if(!(rec.dateReceipt<fromDate.value))
    {  if(!(rec.dateReceipt>toDate.value)){
        userTableData += `
        <tr>
            <td>${rec.nameReceipt}</td>
            
        </tr>
    `;
      }
    }document.getElementById('balanceTable').innerHTML = userTableData;
   }

   console.log(PaymentSum-ReceptSum);
    }
function CustomeReport(){
    let receipt=JSON.parse(localStorage.getItem('receipt'));
    let userTableData = ``;
    for(const rec of receipt){
        if(!(rec.dateReceipt<fromDate.value))
        {  if(!(rec.dateReceipt>toDate.value)){
            userTableData += `
            <tr>
                <td>${rec.nameReceipt}</td>
                
            </tr>
        `;
          }
        }document.getElementById('customer').innerHTML = userTableData;
       }
}
let paymentreport=document.getElementById("employee");
paymentreport.addEventListener("click",PaymentReport);    
    
function PaymentReport(){
    let payment=JSON.parse(localStorage.getItem('payment'));
    let userTableData = ``;
    for(const pay of payment){
        if(!(pay.datePayment<fromDate.value))
        {  if(!(pay.datePayment>toDate.value))
             console.log(pay.namePayment);
                userTableData += `
                  <tr>
                      <td>${pay.namePayment}</td>
                  </tr>
              `;
        }
        }document.getElementById('payment').innerHTML = userTableData;
       }

