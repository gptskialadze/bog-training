import { Component, OnInit } from '@angular/core';
import { MdbModalConfig, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './modal/modal.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  data: any = [];

  constructor(private modalService: MdbModalService,
    private http: AppService
  ) {}
  ngOnInit(): void {

    this.getUsers()
  }

  openModal(mode: string, data?: any) {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        mode: mode,
        data: data
      }
    });
    this.modalRef.onClose.subscribe((message: any) => {
      this.getUsers()
    });
  }

  deleteUser(id: string) {
    this.http.deleteUser(id).subscribe(() => {
      this.getUsers()
    })
  }

  getUsers() {
    this.data = [];
    this.http.getUsers().subscribe((data: any) => {
      Object.keys(data).forEach((e: any) => {
        this.data = [...this.data, {
          id: e,
          username: data[e].username,
          age: data[e].age,
          birthdate: data[e].birthdate,
        } ]
        
      })
  
      
    })
  }
}
