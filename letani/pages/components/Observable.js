class Observable{

    constructor() {
    this.observers = [];
    }

    isEmpty(){
        if(this.observers.length == 0){
            return true;
        }else{
            return false;
        }
    }

    subscribe(f){
        if(this.observers.filter(f => f).length !== 0){
            return 'Esse cliente já está inscrito'
        } 
        else {
            this.observers.push(f);
        }

    }

    unsubscribe(f){
        if(this.isEmpty() == true){
            return 'Impossivel remover um item, pois a lista está vazia'
        }
        else{
            this.observers = this.observers.filter(subscriber => subscriber !== f);
        }
       
    }

    notify(data){
        return data;
    }

    

}
module.exports = Observable;
