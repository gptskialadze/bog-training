import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  inject, Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ShellService {
    API_URL = "https://jsonplaceholder.typicosde.com/"
    htpp = inject(HttpClient);
    data: string = "Some Data";
    userMaper: Map<string, {}> = new Map();

    headers: HttpHeaders = new HttpHeaders({
        sessionId: "dkajshdia7dtgahsd",
        clientname: "Test123"
    })

    getUsers() {
        return this.htpp.get(this.API_URL + "users")
        .pipe(
           map((res: any) => {
            return Object.values(res)
            console.log(res);
            
           })
        )
    }

    setUsers() {
        return this.htpp.post(this.API_URL + "users.json", {
            id: 2,
            username: "Test1234"
        })
    }

    // getData(): Observable<any> {
    //     const users = [
    //         {
    //             username: "MyUser"
    //         }
    //     ]
    //     this.headers = this.headers.append("orgname", "BOG")
    //     return this.htpp.get<any>(`${this.API_URL}users`,{
    //         headers: this.headers
    //     })
    //     .pipe(
    //          map((data: any) => {
    //            return data.map((data: any) => {
    //             return data.username
    //            })
    //         }),
    //         tap((result: string[]) => {
    //             console.log(result);
    //         }),
    //         //    map((data: User[]) => {
    //         //    return data.map((data: User) => {
    //         //     data.username = data.username + "+";
    //         //     return data
    //         //    })
    //         // }),
    //         //    tap((result: User[]) => {
    //         //     console.log(result);
    //         // }),
    //     )
    // }

    setData() {
        this.data = "Other Data"
    }

    isActive: boolean = false
}