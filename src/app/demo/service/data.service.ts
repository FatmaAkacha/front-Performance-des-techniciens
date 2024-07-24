import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../domain/user';
import { Mission } from '../domain/mission';
import { Observable } from 'rxjs';
import { Client } from '../domain/client';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://127.0.0.1:8000/api/users');
  }

  insertData(data: User): Observable<User> {
    return this.httpClient.post<User>('http://127.0.0.1:8000/api/addUser', data);
  }

  deleteData(id: string): Observable<void> {
    return this.httpClient.delete<void>('http://127.0.0.1:8000/api/deleteUser/' + id);
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>('http://127.0.0.1:8000/api/users/' + id);
  }

  updateUser(id: string, data: User): Observable<User> {
    return this.httpClient.put<User>('http://127.0.0.1:8000/api/updateUser/' + id, data);
  }

  ////////////////////////////////
  getData1(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>('http://127.0.0.1:8000/api/missions');
  }

  insertData1(data1: Mission): Observable<Mission> {
    return this.httpClient.post<Mission>('http://127.0.0.1:8000/api/addMission', data1);
  }

  deleteData1(id: string): Observable<void> {
    return this.httpClient.delete<void>('http://127.0.0.1:8000/api/deleteMission/' + id);
  }

  getMissionById(id: string): Observable<Mission> {
    return this.httpClient.get<Mission>('http://127.0.0.1:8000/api/missions/' + id);
  }

  updateMission(id: string, data1: Mission): Observable<Mission> {
    return this.httpClient.put<Mission>('http://127.0.0.1:8000/api/updateMission/' + id, data1);
  }
  
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://127.0.0.1:8000/api/users');
  }

  ////////////////////////////////////////////////////////
  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>('http://127.0.0.1:8000/api/clients');
  }
  
  getClientById(id: string): Observable<Client> {
    return this.httpClient.get<Client>('http://127.0.0.1:8000/api/clients/' + id);
  }

  insertClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>('http://127.0.0.1:8000/api/addClient', client);
  }
  
  deleteClient(id: string): Observable<void> {
    return this.httpClient.delete<void>('http://127.0.0.1:8000/api/deleteClient/' + id);
  }

  updateClient(id: string, client: Client): Observable<Client> {
    return this.httpClient.put<Client>('http://127.0.0.1:8000/api/updateClient/' + id, client);
  }

  // Add the new method for getting a client with their missions
  getClientWithMissions(): Observable<Client[]> {
    return this.httpClient.get<Client[]>('http://127.0.0.1:8000/api/clients');
  }
}
