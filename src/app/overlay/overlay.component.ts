import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  isOverlayShow: boolean = false
  constructor(private el: ElementRef) {

  }
  showOverlay() {
    this.isOverlayShow = true;
    const bodyheight = this.el.nativeElement.querySelector(".body").clientHeight;
    const bodyWith = this.el.nativeElement.querySelector(".body").clientWidth;
    this.el.nativeElement.querySelector(".popup").style.width = bodyWith + "px"
    const bodyPositionTop = this.el.nativeElement.querySelector(".body").offsetTop;
    const popupHeight = this.el.nativeElement.querySelector(".popup").offsetHeight;
  

    if (bodyPositionTop - popupHeight < 20) {
      this.el.nativeElement.querySelector(".popup").style.marginTop =  (bodyheight - 15) +  "px";
      this.el.nativeElement.querySelector(".popup").style.setProperty('--border-bottom', '8px');
      this.el.nativeElement.querySelector(".popup").style.setProperty('--border-top', '0');
      this.el.nativeElement.querySelector(".popup").style.setProperty('--top', -(bodyheight - 12) +  "px");
    } else {
      this.el.nativeElement.querySelector(".popup").style.marginTop = - (bodyheight + popupHeight + 10) +  "px";
      this.el.nativeElement.querySelector(".popup").style.setProperty('--border-top', '8px');
      this.el.nativeElement.querySelector(".popup").style.setProperty('--border-bottom', '0');
      this.el.nativeElement.querySelector(".popup").style.setProperty('--top',  (bodyheight + popupHeight - 20) +  "px");
    }

   }

  hideOverlay() {
    this.isOverlayShow = false
  }
}
