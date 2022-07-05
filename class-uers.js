class Users{
    email;
    password;
    buisness_name;
    county;
    currency;
    
    constructor(email,password,buisness_name,county,currency){
        this.setEmail(email);
        this.setPassword(password);
        this.setBuisnessName(buisness_name);
        this.setCounty(county);
        this.setCurrency(currency);
    }
    
    ValidateEmail(inputText)
    {
       let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if(inputText.value.match(mailformat))
         { alert("Valid email address!");
            }
           else
        { lert("You have entered an invalid email address!");
             return false;
            }
    }
    ValidateName(name){
        if(!(typeof(name)=='string')){
            alert("You Should Enter String");
        }
    }
    setEmail(email){
        this.#ValidateEmail(email);
        this.email=email;
    }
    getEmail(){
        return this.email;
    }
    setPassword(password){
        this.password=password;
    }
    getPassword(){
        return this.password;
    }
    setBuisnessName(buisness_name){
        ValidateName(buisness_name);
        return this.buisness_name=buisness_name;
    }
    getBusinessName(){
        return this.buisness_name;
    }
    setCounty(county){
        this.county=county;
    }
    getCounty(){
        return this.county;
    } 
    setCurrency(currency){
        this.currency=currency;
    }
    getCurrency(){
        return this.currency;
    }
}