import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AppService } from '../app.service';
import { skip } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  
  mode!: string;
  data: any;
  constructor(public  modalRef: MdbModalRef<ModalComponent>,
    private http: AppService
  ) {}

  ngOnInit(): void {
    this.mode = this.modalRef?.component.mode;
    this.data = this.modalRef?.component.data;
    
  }

  saveData(username: string, age: string, birthdate: string) {
    
    this.mode == "edit" ? this.editUser(username, age, birthdate, this.data.id): 
    this.addUsers(username, age, birthdate)
  }

  addUsers(username: string, age: string, birthdate: string) {
    this.http.addUsers({
      username: username,
      age: age,
      birthdate: birthdate
    }).subscribe(() => {
      this.modalRef.close("done")
    })
  }
  editUser(username: string, age: string, birthdate: string, id: string) {
    this.http.editUsers({
      username: username,
      age: age,
      birthdate: birthdate
    }, id).subscribe(() => {
      this.modalRef.close("done")
    })
  }
  
  close(): void {
    const closeMessage = 'Modal closed';
    
    
    this.modalRef.close(closeMessage)
  }
}
