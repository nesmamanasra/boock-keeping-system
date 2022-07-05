class coustemer  {
    name;
    date;
    salary;
    
    constructor(nameCoustomer,date,salary){
        this.setName(nameCoustomer);
        this.setDate(date);
        this.setSalary(salary);
    }
    setName(nameCoustomer){
        if((typeof nameCoustomer === 'string') && (nameCoustomer.length > 2) && (firstName.length < 50 )){
            this.nameCoustomer = nameCoustomer;
        }
    }
    setDate(date){
        this.setDate = date;
    }
    setSalary(salary){
        if((typeof salary === 'number')){
            this.salary = salary;
        }
      alert('the value insert is not a number')
    }
    getName(){
        this.nameCoustomer ;
    }
    getDate(){  
        this.date();
    }
    getCurrncy(){
       this.currncy();
    }
    getallFunction(){
        return `${this.getName()} ${this.getDate()} ${this.getCurrncy()}`;
    }
}