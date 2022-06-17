import User from "./User";

export default class Client extends User{

    constructor(username, password,email, name, age, occupation,number){
        super();
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.ellNumber = number;
    }



}