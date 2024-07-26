import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
 API_URL = "https://bog-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.API_URL + "lists.json");
  }

  addData(params: any) {
    return this.http.post(this.API_URL + "lists.json", params);
  }
}
