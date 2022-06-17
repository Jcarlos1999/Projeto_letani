class Observable{

    constructor() {
    this.observers = [];
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
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data){
        return data;
    }

}
module.exports = Observable;
