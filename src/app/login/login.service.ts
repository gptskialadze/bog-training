import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
  getData() {
    return {
        username: "Test1",
        password: "123",
        street: "test Street",
        email: "email@gmail.com"
    }
    
    
  }
}