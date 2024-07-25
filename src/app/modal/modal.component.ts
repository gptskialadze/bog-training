import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  
  mode!: string;
  data: any;
  constructor(public  modalRef: MdbModalRef<ModalComponent>
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

  }
  editUser(username: string, age: string, birthdate: string, id: string) {

  }
  
  close(): void {
    const closeMessage = 'Modal closed';
    
    
    this.modalRef.close(closeMessage)
  }
}
