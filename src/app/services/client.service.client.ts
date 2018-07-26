const HOST = 'https://tk-clients-angular.herokuapp.com/';
// const HOST = 'http://localhost:4200/';
const CLIENT_URL = HOST + 'assets/clients.json';

export class ClientService {

  getAllClients() {
    return fetch(CLIENT_URL)
      .then(response => response.json());
  }

  getClientById(id: string) {
    return fetch(CLIENT_URL)
      .then(response => response.json())
      .then(response2 => response2.filter(client => client.general.id === id));
  }

  searchClients(title: string) {
    return fetch(CLIENT_URL)
      .then(response => response.json())
      .then(response2 => response2.filter(client =>
        client.general.firstName.toLowerCase().includes(title.toLowerCase()) ||
        client.general.lastName.toLowerCase().includes(title.toLowerCase().toLowerCase()) ||
        client.job.company.toLowerCase().includes(title.toLowerCase()) ||
        client.job.title.toLowerCase().includes(title.toLowerCase()) ||
        client.contact.email.toLowerCase().includes(title.toLowerCase()) ||
        client.contact.phone.toLowerCase().includes(title.toLowerCase()) ||
        client.address.street.toLowerCase().includes(title.toLowerCase()) ||
        client.address.city.toLowerCase().includes(title.toLowerCase()) ||
        client.address.zipCode.toLowerCase().includes(title.toLowerCase()) ||
        client.address.country.toLowerCase().includes(title.toLowerCase())
      ));
  }
}
