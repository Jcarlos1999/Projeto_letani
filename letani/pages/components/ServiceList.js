import Observable from "./Observable";

export default class ServiceList extends Observable{
    constructor(){
        super();
        this.litsOfService = [];
    }

    addService(s){
        this.litsOfService.push(s);
        this.notify('Novo serviço foi publicado')
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