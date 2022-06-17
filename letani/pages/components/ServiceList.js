import Observable from "./Observable";

export default class ServiceList extends Observable{
    constructor(){
        super();
        this.litsOfService = [];
    }

    addService(s){
        if(s.isAccept == true){
            return 'Serviço já foi aceito por outro usuario';
        }
        else if(this.litsOfService.filter(f => f === s).length !== 0){
            return 'Esse serviço já existe';
        }
        else{
            this.litsOfService.push(s);
            this.notify('Novo serviço foi publicado')
        }  
    }

    removeService(s){
        this.litsOfService = this.litsOfService.filter(service => service !== s);
        this.notify('Serviço foi removido')
    }

    updateService(s){
        this.litsOfService = this.litsOfService.filter(newService => newService = s);
        this.notify('Serviço foi atualizado')
    }
}