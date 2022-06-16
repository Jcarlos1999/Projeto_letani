import Observable from './Observable';


test('Add data to array oberservers', () => {
    const service = {'requerente': "Hiei",
                'Tipo': 'Frete de moveis'}
    const observer = new Observable();
    observer.subscribe(service);
    var value = observer.observers.length;
    expect(value).toBe(1);
})