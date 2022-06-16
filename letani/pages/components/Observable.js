import React from "react";

class Observable extends React.Component{

    constructor(props) {
    super()
    this.observers = [];
    }

    subscribe(f){
        
        this.observers.push(f);

    }

    unsubscribe(f){
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data){
        this.observers.forEach(observer => observer(data));
    }

}
module.exports = Observable;
