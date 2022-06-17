import Client from './Client';
import Observable from './Observable';

const client1 = new Client('Hiei', '1234', 'Hiei@email.com','Hiei', '23', 'Frete de moveis','68727');
const client2 = new Client('Kuwabara', '4321', 'Kawabara@email.com','Kazuma Kuwabara', '17', 'Jardinheiro','66927');
const client3 = new Client('Urameshi', '7777', 'Urameshi@email.com','Yusuke Urameshi', '18', 'Detetive','66027');

test('Is empty', () => { 
    const observer = new Observable();
    expect(observer.isEmpty).toBeTruthy();

 })

test('Add data to array oberservers', () => {
    const observer = new Observable();
    observer.subscribe(client1);
    var value = observer.observers.length;
    expect(value).toBe(1);
})

test('adding an existing client', () => {
    const observer = new Observable();
    observer.subscribe(client1);

    expect(observer.subscribe(client1)).toBe('Esse cliente já está inscrito');
})


test('Remove from array observers', () => {
    const observer = new Observable();
    observer.subscribe(client2);
    observer.unsubscribe(client2);
    var value = observer.observers.length;
    expect(value).toBe(0);
})

test('Removing from a empty list', () =>{
    const observer = new Observable();

    expect(observer.unsubscribe(client1)).toBe('Impossivel remover um item, pois a lista está vazia');
})

test('Adding one removing two', () =>{
    const observer = new Observable();
    observer.subscribe(client2);
    observer.unsubscribe(client2);

    expect(observer.observers.length).toBe(0);
    expect(observer.unsubscribe(client2)).toBe('Impossivel remover um item, pois a lista está vazia');
})

test('Testin notify', () => {
    const observer = new Observable();

    expect(observer.notify('Foi adicionado um novo servico')).toBe('Foi adicionado um novo servico');
})