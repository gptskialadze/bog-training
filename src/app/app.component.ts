import { Component, OnInit } from '@angular/core';
import { MdbModalConfig, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  data: any = [];

  constructor(private modalService: MdbModalService
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

  getUsers() {
   
  }
}
