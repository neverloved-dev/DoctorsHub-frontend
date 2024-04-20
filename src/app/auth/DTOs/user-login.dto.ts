export class UserLoginDTO{
    email:String|null|undefined;
    password:String|null|undefined;
   
    constructor(email:String,password:String){
        this.email = email;
        this.password = password;
    }
}