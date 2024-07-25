import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) {

    }
  API_URL = "https://bog-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/";
  getUsers() {
     return this.http.get(this.API_URL + "users.json")
  }

  addUsers(params: any) {
    return this.http.post(this.API_URL + "users.json", params)
  }
  
  editUsers(params: any, id: string) {
    return this.http.put(this.API_URL + `users/${id}.json`, params)
  }

  deleteUser(id: string) {
    return this.http.delete(this.API_URL + `users/${id}.json`)
  }
}