import Client from "./Client";
import Service from "./Service";
import ServiceList from "./ServiceList";

const client1 = new Client('Hiei', '1234', 'Hiei@email.com','Hiei', '23', 'Frete de moveis','68727');
const client2 = new Client('Kuwabara', '4321', 'Kawabara@email.com','Kazuma Kuwabara', '17', 'Jardinheiro','66927');
const client3 = new Client('Urameshi', '7777', 'Urameshi@email.com','Yusuke Urameshi', '18', 'Detetive','66027');

test('is empty', () => { 
    const serviceList = new ServiceList();

    expect(serviceList.litsOfService.length).toBe(0);
 })

 test('Adding Service', () =>{
    const serviceList = new ServiceList();
    const service = new Service('Mudança', client1, 'Mudança de casa, no dia 31/02')
    serviceList.addService(service);
    
    expect(serviceList.litsOfService.length).toBe(1);
    expect('Novo serviço foi publicado');
 })

 test('Remove from service list', () => {
    const serviceList = new ServiceList();
    const service1 = new Service('Mudança', client1, 'Mudança de casa, no dia 31/02,')
    const service2 = new Service('Jardinagem', client2, 'Preciso de jardinheiro para pode de arvores')
    const service3 = new Service('Espionagem', client3, 'Preciso de um detetive para serviços de espionagem')

    serviceList.addService(service1);
    serviceList.addService(service2);
    serviceList.addService(service3);

    serviceList.removeService(service2);
    
    expect(serviceList.litsOfService.length).toBe(2);
    expect('Serviço foi removido');
 })

 test('Remove from service list and adding an already existing client', () => {
    const serviceList = new ServiceList();
    const service1 = new Service('Mudança', client1, 'Mudança de casa, no dia 31/02,')
    const service2 = new Service('Jardinagem', client2, 'Preciso de jardinheiro para pode de arvores')
    const service3 = new Service('Espionagem', client3, 'Preciso de um detetive para serviços de espionagem')

    serviceList.addService(service1);
    serviceList.addService(service2);
    serviceList.addService(service3);

    serviceList.removeService(service2);
    serviceList.addService(service3);
    
    expect(serviceList.litsOfService.length).toBe(2);
    expect('Esse serviço já existe');
 })

 test('Update service', () => {
    const serviceList = new ServiceList();
    const service = new Service('Mudança', client1, 'Mudança de casa, no dia 31/02')

    serviceList.addService(service);
    serviceList.subscribe(client1)
    serviceList.subscribe(client2)

    service.setDetails('Mudança de casa, no dia 28/02')

    serviceList.updateService(service)

    expect('Serviço foi atualizado')

 })

 test('Adding an already accepted service', () =>{

    const service = new Service('Mudança', client1, 'Mudança de casa, no dia 31/02')

    service.changeIsAccept();

    expect(service.isAccpt).toBeTruthy();

 })

 test('Change is accept twice', () => {
    const service = new Service('Mudança', client1, 'Mudança de casa, no dia 31/02')

    service.changeIsAccept();
    service.changeIsAccept();

    expect(service.isAccpt).toBeFalsy();
 })