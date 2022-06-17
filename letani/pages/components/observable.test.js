import Client from './Client';
import Observable from './Observable';

test('Is empty', () => { 
    const observer = new Observable();
    const value = observer.observers.length;
    expect(value).toBe(0);

 })

test('Add data to array oberservers', () => {
    const client = new Client('Hiei', '1234', 'Hiei@email.com','Hiei', '23', 'Frete de moveis','66727')
    const observer = new Observable();
    observer.subscribe(client);
    var value = observer.observers.length;
    expect(value).toBe(1);
})


test('Remove from array observers', () => {
    const service = {'requerente': "Kuwabara",
                'Tipo': 'Jardineiro'}
    const observer = new Observable();
    observer.subscribe(service);
    observer.unsubscribe(service);
    var value = observer.observers.length;
    expect(value).toBe(0);
})
