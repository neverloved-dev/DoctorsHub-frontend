export class UserRegisterDTO{
    name:String|null|undefined;
    email:String|null|undefined;
    passwordHashed:String|null|undefined;
    surname:String|null|undefined;
    dateOfBirth:String|null|undefined;
    phoneNumber:String|null|undefined;
    role:String|null|undefined

    constructor(name:String,email:string,passwordHashed:String,surname:String,dateOfBirth:String,phoneNumber:string){
        this.name = name;
        this.email = email;
        this.passwordHashed = passwordHashed;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.role = "patient"
    }
}