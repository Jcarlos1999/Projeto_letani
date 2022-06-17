export default class Service{

    constructor(titulo, user, details){
        this.titulo = titulo;
        this.user = user;
        this.details = details;
        this.isAccpt = false;
    }

    setTitulo(newTitulo){
       this.titulo = newTitulo  ;
    }

    setUser(newUser){
        this.user = newUser;
    }
    
    setDetails(newDetail){
        this.details = newDetail;
    }

    changeIsAccept(){
        this.isAccpt = !this.isAccpt;
    }

}