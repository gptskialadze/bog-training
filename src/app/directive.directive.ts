import { Directive,  OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective implements OnInit {

   data = ["https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMz1-2NMaNL-cuI-y6BCe0wnUafeKfxhQVl6RjrAGHctWV1zuq0QpVQ7aQR1joUBZTD_U&usqp=CAU"]
   index: number = 0;
   context = {
    $implicit: this.data[this.index],
    controler: {
      next: () => {
        this.index ++;
        if(this.data.length - 1 < this.index) {
          this.index = 0
        } 
        this.context.$implicit = this.data[this.index]     
      },
      prev: () => {
        this.index --;
        if (this.index < 0) {
          this.index = this.data.length-1
        }
        this.context.$implicit = this.data[this.index]
      }
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }
 

    ngOnInit(): void {
      this.viewContainer.createEmbeddedView(this.templateRef, this.context)
    }

}
