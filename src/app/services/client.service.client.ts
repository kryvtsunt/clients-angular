// const HOST = 'https://tk-course-management.herokuapp.com/';
const HOST = 'http://localhost:4200/';

const CLIENT_URL = HOST + 'assets/clients.json';

export class ClientService {

  getAllClients() {
    return fetch(CLIENT_URL)
      .then(response => response.json());
  }

}
