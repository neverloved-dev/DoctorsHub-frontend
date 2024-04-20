export class UserRegisterDTO{
    name:String;
    email:String;
    passwordHashed:String;
    surname:String;
    dateOfBirth:Date;
    phoneNumber:String

    constructor(name:String,email:string,passwordHashed:String,surname:String,dateOfBirth:Date,phoneNumber:string){
        this.name = name;
        this.email = email;
        this.passwordHashed = passwordHashed;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
    }
}