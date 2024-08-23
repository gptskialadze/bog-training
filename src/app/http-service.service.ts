import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
   headers!: HttpHeaders;
   
  getPosts() {
   this.headers  = new HttpHeaders({
    AppRequestXId:  "123"
   })

    return this.http.get("https://jsonplaceholder.typicode.com/posts", {
      headers: this.headers
    });
  }

  addPosts() {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", {
      id: 123
    }, {
      headers: {
        id: "ID 12344"
      },
    });
  }
}
